"""
reaction_analysis.py

Estimate player reaction ability
from ByteTrack trajectory.
"""

import math


def calculate_reaction_score(tracks):
    """
    Estimate reaction score from
    movement direction changes.
    """

    if not tracks or len(tracks) < 3:

        return {
            "score": 0.0,
            "metrics": {
                "direction_changes": 0
            },
            "remarks": (
                "Insufficient tracking data"
            )
        }

    points = []

    for track in tracks:

        x1, y1, x2, y2 = track["bbox"]

        center_x = (x1 + x2) / 2
        center_y = (y1 + y2) / 2

        points.append(
            (center_x, center_y)
        )

    direction_changes = 0

    for i in range(
        2,
        len(points)
    ):

        x0, y0 = points[i - 2]
        x1, y1 = points[i - 1]
        x2, y2 = points[i]

        dx1 = x1 - x0
        dy1 = y1 - y0

        dx2 = x2 - x1
        dy2 = y2 - y1

        dot = (
            dx1 * dx2
            +
            dy1 * dy2
        )

        mag1 = math.sqrt(
            dx1 * dx1 +
            dy1 * dy1
        )

        mag2 = math.sqrt(
            dx2 * dx2 +
            dy2 * dy2
        )

        if mag1 == 0 or mag2 == 0:
            continue

        cosine = dot / (
            mag1 * mag2
        )

        cosine = max(
            -1,
            min(1, cosine)
        )

        angle = math.degrees(
            math.acos(cosine)
        )

        if angle > 45:
            direction_changes += 1

    score = min(
        100,
        direction_changes * 2
    )

    return {
        "score": round(score, 2),
        "metrics": {
            "direction_changes":
            direction_changes
        },
        "remarks":
        "Estimated from movement direction changes"
    }