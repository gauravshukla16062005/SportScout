"""
Wrist motion analysis.
"""

from ml.pose_estimation.keypoint_utils import KeypointUtils


def calculate_wrist_motion(keypoints):

    if not keypoints:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No keypoints detected"
        }

    total_motion = 0.0

    previous_left = None
    previous_right = None

    valid_frames = 0

    for frame in keypoints:

        persons = frame.get("keypoints")

        if not persons:
            continue

        person = persons[0]

        if len(person) < 11:
            continue

        left_wrist = person[9]
        right_wrist = person[10]

        if previous_left is not None:
            total_motion += KeypointUtils.get_distance(
                previous_left,
                left_wrist
            )

        if previous_right is not None:
            total_motion += KeypointUtils.get_distance(
                previous_right,
                right_wrist
            )

        previous_left = left_wrist
        previous_right = right_wrist

        valid_frames += 1

    score = min(100.0, total_motion / 25)

    return {
        "score": round(score, 2),
        "metrics": {
            "wrist_motion_distance": round(total_motion, 2),
            "frames_analyzed": valid_frames
        },
        "remarks": "Calculated from wrist movement"
    }