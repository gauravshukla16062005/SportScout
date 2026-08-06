"""
recommendation.py

Generate recommendations from evaluation results.
"""


def generate_recommendation(evaluation: dict) -> dict:
    """
    Generate player recommendations based on
    evaluation scores.

    Args:
        evaluation:
            Output from evaluator.py

    Returns:
        Dictionary containing recommendation,
        strengths and improvement areas.
    """

    overall = evaluation["overall_score"]

    strengths = []

    improvements = []

    for feature, score in evaluation["feature_scores"].items():

        if score >= 20:
            strengths.append(feature.replace("_", " ").title())

        elif score <= 8:
            improvements.append(feature.replace("_", " ").title())

    if overall >= 85:

        recommendation = (
            "Excellent performance. "
            "Strong candidate for advanced competition."
        )

    elif overall >= 70:

        recommendation = (
            "Good overall performance with "
            "some areas for improvement."
        )

    elif overall >= 50:

        recommendation = (
            "Average performance. "
            "Regular training is recommended."
        )

    else:

        recommendation = (
            "Needs significant improvement before "
            "competitive evaluation."
        )

    return {

        "overall_score": overall,

        "recommendation": recommendation,

        "strengths": strengths,

        "improvement_areas": improvements

    }