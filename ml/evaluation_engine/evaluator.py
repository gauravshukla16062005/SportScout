"""
evaluator.py

Main evaluation engine for SportScout.
"""

from ml.evaluation_engine.scoring import calculate_weighted_score


def evaluate_player(features: dict) -> dict:
    """
    Evaluate badminton performance.

    Args:
        features:
            Output from feature_pipeline.py

    Returns:
        Evaluation summary.
    """

    weighted_scores = {}

    overall_score = 0.0

    for feature_name, feature_data in features.items():

        # Ignore modules that don't provide a numeric score
        if "score" not in feature_data:
            continue

        score = feature_data["score"]

        weighted = calculate_weighted_score(
            feature_name,
            score
        )

        weighted_scores[feature_name] = round(weighted, 2)

        overall_score += weighted

    return {

        "overall_score": round(overall_score, 2),

        "feature_scores": weighted_scores

    }