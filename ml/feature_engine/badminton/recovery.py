"""
Recovery score using ByteTrack.
"""


def calculate_recovery(tracks):

    if not tracks:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No tracking data"
        }

    frame_positions = {}

    for t in tracks:

        frame = t["frame"]

        x1, y1, x2, y2 = t["bbox"]

        center_x = (x1 + x2) / 2
        center_y = (y1 + y2) / 2

        frame_positions[frame] = (
            center_x,
            center_y
        )

    positions = list(
        frame_positions.values()
    )

    if len(positions) < 2:

        return {
            "score": 0.0,
            "metrics": {},
            "remarks":
                "Insufficient tracking data"
        }

    total_shift = 0

    for i in range(1, len(positions)):

        dx = (
            positions[i][0]
            - positions[i - 1][0]
        )

        dy = (
            positions[i][1]
            - positions[i - 1][1]
        )

        total_shift += (
            dx * dx + dy * dy
        ) ** 0.5

    avg_shift = (
        total_shift /
        len(positions)
    )

    score = max(
        0,
        min(
            100,
            100 - avg_shift / 5
        )
    )

    return {
        "score": round(score, 2),
        "metrics": {
            "average_shift":
                round(avg_shift, 2)
        },
        "remarks":
            "Estimated recovery from player repositioning"
    }