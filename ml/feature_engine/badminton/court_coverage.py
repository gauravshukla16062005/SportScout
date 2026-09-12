"""
Court coverage analysis using ByteTrack.
"""

import math


def calculate_court_coverage(tracks):

    if not tracks:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No tracking data"
        }

    centers_x = []
    centers_y = []

    for t in tracks:

        x1, y1, x2, y2 = t["bbox"]

        center_x = (x1 + x2) / 2
        center_y = (y1 + y2) / 2

        centers_x.append(center_x)
        centers_y.append(center_y)

    width = max(centers_x) - min(centers_x)
    height = max(centers_y) - min(centers_y)

    movement_area = width * height

    score = min(
        100.0,
        movement_area / 5000
    )

    return {
        "score": round(score, 2),
        "metrics": {
            "movement_area": round(
                movement_area,
                2
            ),
            "width": round(width, 2),
            "height": round(height, 2)
        },
        "remarks":
            "Calculated using ByteTrack trajectory"
    }