import numpy as np


def calculate_recovery_quality(tracks):

    if not tracks or len(tracks) < 5:

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

    centers = np.array(centers)

    base_x = np.mean(
        centers[:, 0]
    )

    base_y = np.mean(
        centers[:, 1]
    )

    distances = []

    for x, y in centers:

        distance = np.sqrt(
            (x - base_x) ** 2 +
            (y - base_y) ** 2
        )

        distances.append(distance)

    avg_distance = np.mean(
        distances
    )

    consistency = np.std(
        distances
    )

    recovery_score = (
        100
        - (avg_distance / 6)
        - (consistency / 8)
    )

    recovery_score = max(
        0,
        min(
            100,
            recovery_score
        )
    )

    return {
        "score": round(
            float(recovery_score),
            2
        ),
        "metrics": {
            "average_return_distance":
            round(
                float(avg_distance),
                2
            ),
            "consistency":
            round(
                float(consistency),
                2
            )
        },
        "remarks":
        "Recovery efficiency and movement consistency"
    }