"""
Balance feature extraction.
"""

from ml.pose_estimation.keypoint_utils import KeypointUtils


def calculate_balance(keypoints):
    """
    Calculate body balance using
    center-of-mass stability.
    """

    if not keypoints:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No keypoints detected"
        }

    total_shift = 0.0
    valid_frames = 0

    previous_center = None

    for frame in keypoints:

        persons = frame.get("keypoints")

        if not persons:
            continue

        person = persons[0]

        if len(person) < 13:
            continue

        left_shoulder = person[5]
        right_shoulder = person[6]

        left_hip = person[11]
        right_hip = person[12]

        center = KeypointUtils.get_center_of_mass(
            left_hip,
            right_hip,
            left_shoulder,
            right_shoulder
        )

        if previous_center is not None:
            total_shift += KeypointUtils.get_distance(
                previous_center,
                center
            )

        previous_center = center
        valid_frames += 1

    avg_shift = total_shift / max(valid_frames, 1)

    score = max(0.0, min(100.0, 100 - avg_shift))

    return {
        "score": round(score, 2),
        "metrics": {
            "average_center_shift": round(avg_shift, 2),
            "frames_analyzed": valid_frames
        },
        "remarks": "Calculated from center-of-mass stability"
    }