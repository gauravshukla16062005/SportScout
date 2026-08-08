"""
report_generator.py

Generate the final AI performance report.
"""

from ml.explainability.feedback import generate_feedback


def generate_report(
    evaluation: dict,
    recommendation: dict
) -> dict:
    """
    Generate the final SportScout report.

    Args:
        evaluation:
            Output from evaluator.py

        recommendation:
            Output from recommendation.py

    Returns:
        Final explainable report.
    """

    feedback = generate_feedback(
        evaluation["feature_scores"]
    )

    return {

        "overall_score": evaluation["overall_score"],

        "feature_scores": evaluation["feature_scores"],

        "feedback": feedback,

        "strengths": recommendation["strengths"],

        "improvement_areas": recommendation[
            "improvement_areas"
        ],

        "recommendation": recommendation[
            "recommendation"
        ]
    }