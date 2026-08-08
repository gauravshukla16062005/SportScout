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

# Load models once when pipeline starts
POSE_MODEL = RTMPoseModel(mode="balanced").load()
POSE_INFERENCE = PoseInference(POSE_MODEL)

TRACKER = ByteTracker("models/best.pt")


def run_pipeline(video_path: str):
    """
    Execute complete SportScout pipeline.

    Args:
        video_path (str):
            Path to badminton video.

    Returns:
        dict:
            Complete analysis result.
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

    print("\nTRACKS FOUND:", len(tracks))

    if len(tracks) > 0:
        print("SAMPLE TRACK:")
        print(tracks[0])

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
        "recommendation": recommendation,
    }