"""
recommendation.py

Generate recommendations from evaluation results.
"""


def generate_recommendation(
    evaluation: dict,
    features: dict
) -> dict:
    """
    Generate player recommendations.

    Args:
        evaluation:
            Output from evaluator.py

        features:
            Raw feature extraction results

    Returns:
        Recommendation summary.
    """

    overall = evaluation["overall_score"]

    strengths = []
    improvements = []

    for feature_name, feature_data in features.items():

        if not isinstance(feature_data, dict):
            continue

        if "score" not in feature_data:
            continue

        score = float(
            feature_data.get("score", 0)
        )

        if score >= 80:
            strengths.append(
                feature_name.replace(
                    "_",
                    " "
                ).title()
            )

        elif score <= 60:
            improvements.append(
                feature_name.replace(
                    "_",
                    " "
                ).title()
            )

    if overall >= 85:

        recommendation = (
            "Excellent performance. Strong candidate "
            "for advanced competition."
        )

    elif overall >= 70:

        recommendation = (
            "Good overall performance with some "
            "areas for improvement."
        )

    elif overall >= 50:

        recommendation = (
            "Average performance. Regular training "
            "is recommended."
        )

    else:

        recommendation = (
            "Needs significant improvement before "
            "competitive evaluation."
        )

    return {

        "overall_score": round(
            overall,
            2
        ),

        "recommendation": recommendation,

        "strengths": strengths,

        "improvement_areas": improvements

    }