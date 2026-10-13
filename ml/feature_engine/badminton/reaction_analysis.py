"""
reaction_analysis.py

Estimate player reaction ability
from ByteTrack trajectory.
"""

import math
import numpy as np


def calculate_reaction_score(tracks):

    if not tracks or len(tracks) < 5:

        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "Insufficient tracking data"
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
    burst_movements = 0

    speeds = []

    for i in range(1, len(points)):

        x0, y0 = points[i - 1]
        x1, y1 = points[i]

        speed = math.sqrt(
            (x1 - x0) ** 2 +
            (y1 - y0) ** 2
        )

        speeds.append(speed)

    avg_speed = np.mean(speeds)

    for i in range(2, len(points)):

        x0, y0 = points[i - 2]
        x1, y1 = points[i - 1]
        x2, y2 = points[i]

        dx1 = x1 - x0
        dy1 = y1 - y0

        dx2 = x2 - x1
        dy2 = y2 - y1

        dot = (
            dx1 * dx2 +
            dy1 * dy2
        )

        mag1 = math.sqrt(dx1**2 + dy1**2)
        mag2 = math.sqrt(dx2**2 + dy2**2)

        if mag1 == 0 or mag2 == 0:
            continue

        cosine = dot / (mag1 * mag2)

        cosine = max(
            -1,
            min(1, cosine)
        )

        angle = math.degrees(
            math.acos(cosine)
        )

        if angle > 60:
            direction_changes += 1

    for speed in speeds:

        if speed > avg_speed * 1.5:
            burst_movements += 1

    score = (
        direction_changes * 0.4 +
        burst_movements * 0.6
    )

    score = min(score, 95)

    return {
        "score": round(score, 2),
        "metrics": {
            "direction_changes": direction_changes,
            "burst_movements": burst_movements,
            "average_speed": round(
                float(avg_speed),
                2
            )
        },
        "remarks":
        "Estimated from direction changes and movement bursts"
    }