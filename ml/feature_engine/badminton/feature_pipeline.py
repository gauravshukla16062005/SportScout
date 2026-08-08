"""
feature_pipeline.py

Main feature extraction pipeline for SportScout.
"""

from .shoulder_rotation import calculate_shoulder_rotation
from .body_alignment import calculate_body_alignment

from ml.feature_engine.badminton.footwork import (
    calculate_footwork,
)

from ml.feature_engine.badminton.balance import (
    calculate_balance,
)

from ml.feature_engine.badminton.recovery import (
    calculate_recovery,
)

from ml.feature_engine.badminton.court_coverage import (
    calculate_court_coverage,
)

from ml.feature_engine.badminton.wrist_motion import (
    calculate_wrist_motion,
)

from ml.feature_engine.badminton.split_step import (
    calculate_split_step,
)

from ml.feature_engine.badminton.stroke_classifier import (
    classify_stroke,
)


def extract_features(keypoints, tracks):
    """
    Execute the complete badminton
    feature extraction pipeline.

    Args:
        keypoints:
            RTMPose output.

        tracks:
            ByteTrack output.

    Returns:
        Dictionary containing all extracted features.
    """

    footwork = calculate_footwork(
        keypoints,
        tracks
    )

    shoulder_rotation = calculate_shoulder_rotation(
        keypoints
    )

    body_alignment = calculate_body_alignment(
        keypoints
    )

    balance = calculate_balance(
        keypoints
    )

    recovery = calculate_recovery(
        tracks
    )

    court_coverage = calculate_court_coverage(
        keypoints
    )

    wrist_motion = calculate_wrist_motion(
        keypoints
    )

    split_step = calculate_split_step(
        keypoints
    )

    stroke = classify_stroke(
        keypoints,
        tracks
    )

    return {
        "footwork": footwork,
        "shoulder_rotation": shoulder_rotation,
        "body_alignment": body_alignment,
        "balance": balance,
        "recovery": recovery,
        "court_coverage": court_coverage,
        "wrist_motion": wrist_motion,
        "split_step": split_step,
        "stroke": stroke
    }