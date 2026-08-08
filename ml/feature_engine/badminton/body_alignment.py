"""
Body alignment analysis.
"""

from ml.pose_estimation.keypoint_utils import KeypointUtils


def calculate_body_alignment(keypoints):

    if not keypoints:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No keypoints detected"
        }

    total_offset = 0.0
    frames = 0

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

        shoulder_center = (
            (left_shoulder[0] + right_shoulder[0]) / 2,
            (left_shoulder[1] + right_shoulder[1]) / 2
        )

        hip_center = (
            (left_hip[0] + right_hip[0]) / 2,
            (left_hip[1] + right_hip[1]) / 2
        )

        offset = abs(
            shoulder_center[0] - hip_center[0]
        )

        total_offset += offset
        frames += 1

    avg_offset = total_offset / max(frames, 1)

    score = max(
    0.0,
    min(100.0, 100 - (avg_offset / 3))
)

    return {
        "score": round(score, 2),
        "metrics": {
            "average_offset": round(avg_offset, 2)
        },
        "remarks": "Body posture alignment"
    }