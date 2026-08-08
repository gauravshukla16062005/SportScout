"""
metadata.py

Extract metadata from a video using OpenCV.
"""

from pathlib import Path
import cv2


def extract_metadata(cap: cv2.VideoCapture, video_path: str) -> dict:
    """
    Extract metadata from an opened video.

    Args:
        cap (cv2.VideoCapture):
            OpenCV VideoCapture object.

        video_path (str):
            Path of the input video.

    Returns:
        dict:
            Dictionary containing video metadata.
    """

    fps = cap.get(cv2.CAP_PROP_FPS)

    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))

    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    duration = frame_count / fps if fps > 0 else 0
    PROCESSED_WIDTH = 1280
    PROCESSED_HEIGHT = 720

    return {
    "video_name": Path(video_path).name,
    "video_path": str(video_path),
    "fps": round(fps, 2),
    "frame_count": frame_count,
    "width": width,
    "height": height,
    "processed_width": PROCESSED_WIDTH,
    "processed_height": PROCESSED_HEIGHT,
    "duration": round(duration, 2),
}