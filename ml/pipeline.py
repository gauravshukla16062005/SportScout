"""
pipeline.py

Main SportScout AI pipeline.
"""

from ml.preprocessing.preprocess import preprocess_video
from ml.pose_estimation import RTMPoseModel, PoseInference
from ml.tracking import ByteTracker

from ml.feature_engine.badminton.feature_pipeline import (
    extract_features,
)

from ml.evaluation_engine.evaluator import (
    evaluate_player,
)

from ml.evaluation_engine.recommendation import (
    generate_recommendation,
)

from ml.visualization.player_heatmap import (
    generate_player_heatmap
)

from ml.visualization.movement_trail import (
    generate_movement_trail
)

from ml.feature_engine.badminton.player_profile import (
    generate_player_profile
)

from ml.feature_engine.badminton.agility_score import (
    calculate_agility_score
)

import json
import os


# ---------------------------------
# Load models once
# ---------------------------------

POSE_MODEL = RTMPoseModel(mode="balanced").load()
POSE_INFERENCE = PoseInference(POSE_MODEL)

TRACKER = ByteTracker(
    "models/yolo11n.pt"
)


def run_pipeline(video_path: str):
    """
    Execute complete SportScout pipeline.
    """

    # -----------------------------
    # Step 1 : OpenCV Preprocessing
    # -----------------------------
    preprocessing = preprocess_video(video_path)

    # -----------------------------
    # Step 2 : RTMPose
    # -----------------------------
    keypoints = POSE_INFERENCE.process_video(video_path)

    # -----------------------------
    # Step 3 : YOLO + ByteTrack
    # -----------------------------
    tracks = TRACKER.track_video(video_path)

    generate_player_heatmap(tracks)

    generate_movement_trail(tracks)

    # -----------------------------
    # Step 4 : Feature Extraction
    # -----------------------------
    features = extract_features(
    keypoints,
    tracks,
    )

    with open(
    "results/features_debug.json",
    "w"
    ) as f:
       json.dump(
        features,
        f,
        indent=4,
        default=str
    )

    # -----------------------------
    # Step 5 : Evaluation
    # -----------------------------
    evaluation = evaluate_player(
        features
    )

    # -----------------------------
    # Step 6 : Recommendation
    # -----------------------------
    recommendation = generate_recommendation(
        evaluation,
        features
    )

    player_profile = generate_player_profile(
    features
    )

    agility_score = calculate_agility_score(
    features["footwork"],
    features["player_speed"],
    features["balance"],
    features["recovery_quality"],
    features["reaction_analysis"]
    )

    features["agility_score"] = agility_score

    # -----------------------------
    # Step 7 : Build Report
    # -----------------------------
    report = {
        "metadata": preprocessing["metadata"],
        "overall_score": evaluation.get(
            "overall_score",
            0
        ),
        "features": features,
        "evaluation": evaluation,
        "recommendation": recommendation,
        "player_profile": player_profile,
    }

    # -----------------------------
    # Step 8 : Console Summary
    # -----------------------------
    print("\n" + "=" * 50)
    print("SPORTSCOUT ANALYSIS SUMMARY")
    print("=" * 50)

    print(
        f"Overall Score: "
        f"{report['overall_score']}/100"
    )

    print("\nFeature Scores:")

    for name, data in features.items():

        if (
            isinstance(data, dict)
            and "score" in data
        ):
            print(
                f"  {name:<20} "
                f"{round(float(data['score']), 2)}"
            )

    print("\nStroke Prediction:")

    if "stroke" in features:
        print(
            f"  {features['stroke']['stroke']} "
            f"({features['stroke']['confidence']:.2f})"
        )

    # -----------------------------
    # Step 9 : Save JSON
    # -----------------------------
    os.makedirs(
        "results",
        exist_ok=True
    )

    with open(
        "results/player_report.json",
        "w",
        encoding="utf-8"
    ) as f:
        json.dump(
            report,
            f,
            indent=4,
            default=str
        )

    print(
        "\nSaved Report -> "
        "results/player_report.json"
    )

    return report