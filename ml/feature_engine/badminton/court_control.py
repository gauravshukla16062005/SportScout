"""
court_control.py

Court control analysis.
"""

import numpy as np


def calculate_court_control(tracks):

    if not tracks:

        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No tracking data"
        }

    centers = []

    for track in tracks:

        x1, y1, x2, y2 = track["bbox"]

        center_x = (x1 + x2) / 2
        center_y = (y1 + y2) / 2

        centers.append(
            [center_x, center_y]
        )

    centers = np.array(centers)

    min_x = np.min(centers[:, 0])
    max_x = np.max(centers[:, 0])

    min_y = np.min(centers[:, 1])
    max_y = np.max(centers[:, 1])

    occupied_area = (
        (max_x - min_x)
        *
        (max_y - min_y)
    )

    court_area = (
        1080 * 1920
    )

    score = min(
        100,
        (occupied_area / court_area) * 400
    )

    return {

        "score": round(score, 2),

        "metrics": {
            "occupied_area":
            round(
                occupied_area,
                2
            )
        },

        "remarks":
        "Estimated from tracked court occupancy"
    }