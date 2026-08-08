"""
Split-step analysis.
"""

from ml.pose_estimation.keypoint_utils import KeypointUtils


def calculate_split_step(keypoints):

    if not keypoints:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No keypoints detected"
        }

    total_distance = 0.0

    valid_frames = 0

    for frame in keypoints:

        persons = frame.get("keypoints")

        if not persons:
            continue

        person = persons[0]

        if len(person) < 17:
            continue

        left_ankle = person[15]
        right_ankle = person[16]

        distance = KeypointUtils.get_distance(
            left_ankle,
            right_ankle
        )

        total_distance += distance
        valid_frames += 1

    avg_distance = (
        total_distance / valid_frames
        if valid_frames
        else 0
    )

    score = min(100.0, avg_distance / 2)

    return {
        "score": round(score, 2),
        "metrics": {
            "average_ankle_separation": round(avg_distance, 2)
        },
        "remarks": "Estimated split-step quality"
    }