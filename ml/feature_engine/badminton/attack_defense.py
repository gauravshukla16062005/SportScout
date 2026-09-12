"""
attack_defense.py

Attack and defense analysis
using court positioning.
"""


def analyze_attack_defense(tracks):
    """
    Analyze playing style from
    court positioning.
    """

    if not tracks:

        return {
            "attack_score": 0.0,
            "defense_score": 0.0,
            "play_style": "Unknown"
        }

    front = 0
    mid = 0
    back = 0

    for track in tracks:

        x1, y1, x2, y2 = track["bbox"]

        center_y = (
            y1 + y2
        ) / 2

        if center_y < 640:
            front += 1

        elif center_y < 1280:
            mid += 1

        else:
            back += 1

    total = front + mid + back

    if total == 0:
        total = 1

    front_pct = (
        front / total
    ) * 100

    mid_pct = (
        mid / total
    ) * 100

    back_pct = (
        back / total
    ) * 100

    attack_score = round(
        front_pct + (mid_pct * 0.5),
        2
    )

    defense_score = round(
        back_pct + (mid_pct * 0.5),
        2
    )

    if attack_score > defense_score + 15:

        style = "Aggressive"

    elif defense_score > attack_score + 15:

        style = "Defensive"

    else:

        style = "Balanced"

    return {

        "attack_score": attack_score,

        "defense_score": defense_score,

        "play_style": style,

        "metrics": {

            "front_court": round(
                front_pct,
                2
            ),

            "mid_court": round(
                mid_pct,
                2
            ),

            "back_court": round(
                back_pct,
                2
            )
        }
    }