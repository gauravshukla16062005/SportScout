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

from ml.feature_engine.badminton.player_distance import (
    calculate_player_distance,
)

from ml.feature_engine.badminton.player_speed import (
    calculate_player_speed,
)

from ml.feature_engine.badminton.zone_analysis import (
    analyze_player_zones
)
from ml.feature_engine.badminton.reaction_analysis import (
    calculate_reaction_score
)
from ml.feature_engine.badminton.attack_defense import (
    analyze_attack_defense
)
from ml.feature_engine.badminton.court_control import (
    calculate_court_control
)
from ml.feature_engine.badminton.recovery_quality import (
    calculate_recovery_quality,
)
from ml.feature_engine.badminton.agility_score import (
    calculate_agility_score,
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
    tracks
    )

    wrist_motion = calculate_wrist_motion(
        keypoints
    )

    split_step = calculate_split_step(
        keypoints
    )

    player_distance = calculate_player_distance(
    tracks
)

    player_speed = calculate_player_speed(
    tracks
)
    reaction_analysis = (
    calculate_reaction_score(
        tracks
    )
)
    zone_analysis = analyze_player_zones(
    tracks
)
    attack_defense = (
    analyze_attack_defense(
        tracks
    )
)
    court_control = (
    calculate_court_control(
        tracks
    )
)
    recovery_quality = (
    calculate_recovery_quality(
        tracks
    )
)
    agility_score = calculate_agility_score(
    footwork,
    player_speed,
    balance,
    recovery_quality
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
        "player_distance": player_distance,
        "player_speed": player_speed,
        "stroke": stroke,
        "zone_analysis": zone_analysis,
        "attack_defense": attack_defense,
        "court_control": court_control,
        "recovery_quality": recovery_quality,
        "agility_score": agility_score,
        "reaction_analysis": reaction_analysis
    }