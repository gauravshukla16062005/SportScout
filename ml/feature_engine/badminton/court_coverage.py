"""
Court coverage analysis from pose trajectory.
"""

def calculate_court_coverage(keypoints):

    if not keypoints:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No keypoints detected"
        }

    x_positions = []
    y_positions = []

    for frame in keypoints:

        persons = frame.get("keypoints")

        if not persons:
            continue

        person = persons[0]

        if len(person) < 13:
            continue

        left_hip = person[11]
        right_hip = person[12]

        center_x = (
            left_hip[0] +
            right_hip[0]
        ) / 2

        center_y = (
            left_hip[1] +
            right_hip[1]
        ) / 2

        x_positions.append(center_x)
        y_positions.append(center_y)

    if len(x_positions) < 2:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "Insufficient movement data"
        }

    width = max(x_positions) - min(x_positions)
    height = max(y_positions) - min(y_positions)

    movement_area = width * height

    score = min(
        100.0,
        movement_area / 1000
    )

    return {
        "score": round(score, 2),
        "metrics": {
            "movement_area": round(movement_area, 2),
            "width": round(width, 2),
            "height": round(height, 2)
        },
        "remarks": "Estimated from player pose trajectory"
    }