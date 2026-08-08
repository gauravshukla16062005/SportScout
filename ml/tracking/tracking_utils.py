"""
tracking_utils.py

Utility functions for processing ByteTrack results.
"""

from typing import List, Dict

# Temporary class mapping for the badminton prototype.
# Verify/update these IDs after receiving the final YOLO model.
CLASS_NAMES = {
    0: "player",
    1: "racket",
    2: "shuttlecock"
}


def format_tracking_results(results) -> List[Dict]:
    """
    Convert Ultralytics tracking results into a
    simple list of dictionaries.

    Args:
        results:
            Ultralytics tracking results.

    Returns:
        List of tracked objects.
    """

    tracked_objects = []

    for frame_id, result in enumerate(results):

        if result.boxes is None:
            continue

        boxes = result.boxes

        for box in boxes:

            track_id = None

            if box.id is not None:
                track_id = int(box.id.item())

            class_id = int(box.cls.item())

            class_name = CLASS_NAMES.get(class_id, "unknown")

            confidence = float(box.conf.item())

            x1, y1, x2, y2 = box.xyxy[0].tolist()

            tracked_objects.append({
                "frame_id": frame_id,
                "track_id": track_id,
                "class_id": class_id,
                "class_name": class_name,
                "confidence": confidence,
                "bbox": [
                    x1,
                    y1,
                    x2,
                    y2
                ]
            })

    return tracked_objects