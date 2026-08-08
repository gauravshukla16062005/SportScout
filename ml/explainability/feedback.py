"""
feedback.py

Generate feature-wise feedback.
"""

from ml.explainability.templates import FEATURE_FEEDBACK


def _feedback_level(score: float) -> str:
    """
    Convert numeric score into a feedback category.
    """

    if score >= 85:
        return "excellent"

    elif score >= 70:
        return "good"

    elif score >= 50:
        return "average"

    return "poor"


def generate_feedback(feature_scores: dict) -> dict:
    """
    Generate human-readable feedback.

    Args:
        feature_scores:
            Dictionary containing weighted feature scores.

    Returns:
        Dictionary containing textual feedback.
    """

    feedback = {}

    for feature, score in feature_scores.items():

        level = _feedback_level(score)

        feedback[feature] = FEATURE_FEEDBACK.get(
            feature,
            {}
        ).get(
            level,
            "No feedback available."
        )

    return feedback