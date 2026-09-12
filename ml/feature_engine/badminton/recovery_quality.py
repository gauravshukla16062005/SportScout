import numpy as np


def calculate_recovery_quality(tracks):
    """
    Estimate recovery quality using
    player trajectory.
    """

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
            (center_x, center_y)
        )

    if len(centers) < 5:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "Insufficient trajectory"
        }

    centers = np.array(centers)

    base_x = np.mean(centers[:, 0])
    base_y = np.mean(centers[:, 1])

    distances = []

    for x, y in centers:

        d = np.sqrt(
            (x - base_x) ** 2 +
            (y - base_y) ** 2
        )

        distances.append(d)

    avg_distance = np.mean(distances)

    score = max(
        0,
        100 - (avg_distance / 5)
    )

    return {
        "score": round(score, 2),
        "metrics": {
            "average_return_distance":
            round(float(avg_distance), 2)
        },
        "remarks":
        "Recovery efficiency after movement"
    }