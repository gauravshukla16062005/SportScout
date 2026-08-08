"""
tracker.py

ByteTrack wrapper for SportScout.
"""

from ultralytics import YOLO

from ml.tracking.config import (
    TRACKER_CONFIG,
    CONFIDENCE_THRESHOLD,
    IOU_THRESHOLD,
    PERSIST_TRACKS,
)

from ml.tracking.tracking_utils import (
    format_tracking_results,
)


class ByteTracker:
    """
    Wrapper around Ultralytics YOLO + ByteTrack.
    """

    def __init__(self, model_path: str):
        """
        Initialize the YOLO model.

        Args:
            model_path (str): Path to the YOLO model weights.
        """
        self.model = YOLO(model_path)

    def track_video(self, video_path: str):
        """
        Perform object tracking on a video.

        Args:
            video_path (str):
                Path to the input video.

        Returns:
            list:
                Formatted tracking results.
        """

        results = self.model.track(
            source=video_path,
            tracker=TRACKER_CONFIG,
            conf=CONFIDENCE_THRESHOLD,
            iou=IOU_THRESHOLD,
            persist=PERSIST_TRACKS,
            verbose=False,
        )

        print("\nRAW YOLO RESULTS")

        for i, r in enumerate(results):

            if r.boxes is not None and len(r.boxes) > 0:

                print("FRAME:", i)
                print("CLASSES:", r.boxes.cls)
                print("CONF:", r.boxes.conf)

                break

        formatted_results = format_tracking_results(results)

        print("FORMATTED TRACKS:", len(formatted_results))

        return formatted_results