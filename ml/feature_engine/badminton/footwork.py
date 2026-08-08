"""
Footwork feature extraction.
"""

from ml.pose_estimation.keypoint_utils import KeypointUtils


def calculate_footwork(keypoints, tracks):
    """
    Calculate badminton footwork score using
    ankle movement across frames.
    """

    if not keypoints:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No keypoints detected"
        }

    total_movement = 0.0
    valid_frames = 0

    previous_left = None
    previous_right = None

    for frame in keypoints:

        persons = frame.get("keypoints")

        if not persons:
            continue

        person = persons[0]

        if len(person) < 18:
            continue

        left_ankle = person[15]
        right_ankle = person[16]

        if previous_left is not None:
            total_movement += KeypointUtils.get_distance(
                previous_left,
                left_ankle
            )

        if previous_right is not None:
            total_movement += KeypointUtils.get_distance(
                previous_right,
                right_ankle
            )

        previous_left = left_ankle
        previous_right = right_ankle

        valid_frames += 1

    score = min(100.0, total_movement / 20)

    return {
        "score": round(score, 2),
        "metrics": {
            "total_ankle_movement": round(total_movement, 2),
            "frames_analyzed": valid_frames
        },
        "remarks": "Calculated from ankle movement"
    }