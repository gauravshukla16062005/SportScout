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

        formatted_results = format_tracking_results(results)

        return formatted_results