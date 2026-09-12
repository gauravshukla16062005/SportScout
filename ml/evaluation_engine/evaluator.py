"""
evaluator.py

Main evaluation engine for SportScout.
"""

from ml.evaluation_engine.scoring import calculate_weighted_score


def evaluate_player(features: dict) -> dict:
    """
    Evaluate badminton performance.
    """

    weighted_scores = {}
    overall_score = 0.0

    for feature_name, feature_data in features.items():

        if not isinstance(feature_data, dict):
            continue

        if "score" not in feature_data:
            continue

        score = float(
            feature_data.get("score", 0.0)
        )

        weighted = calculate_weighted_score(
            feature_name,
            score
        )

        weighted_scores[feature_name] = round(
            weighted,
            2
        )

        overall_score += weighted

    return {
        "overall_score": round(
            overall_score,
            2
        ),
        "feature_scores": {
            k: round(v, 2)
            for k, v in weighted_scores.items()
        }
    }