"""
agility_score.py

Combined agility evaluation.
"""


def calculate_agility_score(
    footwork,
    speed,
    balance,
    recovery_quality
):
    """
    Combine movement-related
    features into one agility score.
    """

    footwork_score = footwork.get(
        "score",
        0
    )

    speed_score = speed.get(
        "score",
        0
    )

    balance_score = balance.get(
        "score",
        0
    )

    recovery_score = recovery_quality.get(
        "score",
        0
    )

    agility = (
        footwork_score * 0.30
        + speed_score * 0.25
        + balance_score * 0.20
        + recovery_score * 0.25
    )

    if agility >= 85:
        rating = "Excellent"

    elif agility >= 70:
        rating = "Good"

    elif agility >= 55:
        rating = "Average"

    else:
        rating = "Needs Improvement"

    return {
        "score": round(
            agility,
            2
        ),
        "rating": rating
    }