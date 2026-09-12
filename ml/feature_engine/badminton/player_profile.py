"""
player_profile.py

Generate player profile.
"""


def generate_player_profile(
    features
):
    strengths = []
    weaknesses = []

    for name, data in features.items():

        if (
            isinstance(data, dict)
            and "score" in data
        ):

            score = data["score"]

            if score >= 80:
                strengths.append(
                    name.replace(
                        "_",
                        " "
                    ).title()
                )

            elif score <= 60:
                weaknesses.append(
                    name.replace(
                        "_",
                        " "
                    ).title()
                )

    speed = features.get(
        "player_speed",
        {}
    ).get(
        "score",
        0
    )

    wrist = features.get(
        "wrist_motion",
        {}
    ).get(
        "score",
        0
    )

    coverage = features.get(
        "court_coverage",
        {}
    ).get(
        "score",
        0
    )

    if speed > 75 and wrist > 60:
        style = "Aggressive Attacker"

    elif coverage > 75:
        style = "Rally Controller"

    else:
        style = "Balanced Player"

    return {
        "player_style": style,
        "strengths": strengths,
        "needs_improvement": weaknesses,
        "recommended_focus":
        (
            "Recovery drills and split-step training"
            if weaknesses
            else
            "Maintain current training routine"
        )
    }