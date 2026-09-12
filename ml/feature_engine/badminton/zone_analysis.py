"""
zone_analysis.py

Badminton court zone analysis.
"""


def analyze_player_zones(tracks):
    """
    Analyze where player spends
    most of the time.
    """

    if not tracks:

        return {
            "front_court": 0,
            "mid_court": 0,
            "back_court": 0,
            "dominant_zone": "unknown"
        }

    front = 0
    mid = 0
    back = 0

    for track in tracks:

        x1, y1, x2, y2 = track["bbox"]

        center_y = (y1 + y2) / 2

        if center_y < 640:
            front += 1

        elif center_y < 1280:
            mid += 1

        else:
            back += 1

    total = front + mid + back

    if total == 0:
        total = 1

    front_pct = round(
        (front / total) * 100,
        2
    )

    mid_pct = round(
        (mid / total) * 100,
        2
    )

    back_pct = round(
        (back / total) * 100,
        2
    )

    dominant = max(
        {
            "front_court": front_pct,
            "mid_court": mid_pct,
            "back_court": back_pct
        },
        key=lambda x: {
            "front_court": front_pct,
            "mid_court": mid_pct,
            "back_court": back_pct
        }[x]
    )

    return {
        "front_court": front_pct,
        "mid_court": mid_pct,
        "back_court": back_pct,
        "dominant_zone": dominant
    }