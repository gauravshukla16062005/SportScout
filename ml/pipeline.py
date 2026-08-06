"""
pipeline.py

Main SportScout AI pipeline.
"""

from ml.preprocessing.preprocess import preprocess_video

from ml.feature_engine.badminton.feature_pipeline import (
    extract_features,
)

from ml.evaluation_engine.evaluator import (
    evaluate_player,
)

from ml.evaluation_engine.recommendation import (
    generate_recommendation,
)


def run_pipeline(video_path: str):
    """
    Execute the complete SportScout pipeline.

    Args:
        video_path:
            Path to input badminton video.

    Returns:
        Final AI analysis.
    """

    # -----------------------------
    # Step 1 : OpenCV
    # -----------------------------
    preprocessing = preprocess_video(video_path)

    # -----------------------------
    # Step 2 : RTMPose
    # -----------------------------
    # TODO
    keypoints = []

    # -----------------------------
    # Step 3 : YOLO + ByteTrack
    # -----------------------------
    # TODO
    tracks = []

    # -----------------------------
    # Step 4 : Feature Extraction
    # -----------------------------
    features = extract_features(
        keypoints,
        tracks,
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
        evaluation
    )

    return {

        "metadata": preprocessing["metadata"],

        "features": features,

        "evaluation": evaluation,

        "recommendation": recommendation

    }