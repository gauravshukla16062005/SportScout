"""
Shoulder rotation analysis.
"""

import math


def calculate_shoulder_rotation(keypoints):

    if not keypoints:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No keypoints detected"
        }

    angles = []

    for frame in keypoints:

        persons = frame.get("keypoints")

        if not persons:
            continue

        person = persons[0]

        if len(person) < 7:
            continue

        left_shoulder = person[5]
        right_shoulder = person[6]

        dx = right_shoulder[0] - left_shoulder[0]
        dy = right_shoulder[1] - left_shoulder[1]

        angle = math.degrees(
            math.atan2(dy, dx)
        )

        angles.append(angle)

    if len(angles) < 2:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "Insufficient shoulder data"
        }

    variation = min(
    max(angles) - min(angles),
    90
)

    score = min(
    100.0,
    (variation / 90) * 100
)
    return {
        "score": round(score, 2),
        "metrics": {
            "rotation_variation": round(
                variation,
                2
            )
        },
        "remarks":
            "Shoulder mobility estimate"
    }