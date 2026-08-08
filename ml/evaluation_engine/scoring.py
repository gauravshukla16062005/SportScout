"""
scoring.py

Feature score calculations.
"""

from ml.evaluation_engine.weights import FEATURE_WEIGHTS


def calculate_weighted_score(
    feature_name: str,
    score: float
) -> float:
    """
    Calculate weighted contribution of a feature.

    Args:
        feature_name:
            Feature name.

        score:
            Feature score (0-100).

    Returns:
        Weighted score.
    """

    if score is None:
        score = 0.0

    weight = FEATURE_WEIGHTS.get(
        feature_name,
        0.0
    )
    print(
    feature_name,
    score,
    FEATURE_WEIGHTS.get(feature_name, 0)
    )

    return float(score) * float(weight)