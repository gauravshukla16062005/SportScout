"""
video_loader.py

Loads and validates video files for the SportScout preprocessing pipeline.
"""

from pathlib import Path
import cv2


SUPPORTED_EXTENSIONS = {".mp4", ".avi", ".mov", ".mkv"}


def validate_video(video_path: str) -> Path:
    """
    Validate the existence and extension of the video file.

    Args:
        video_path (str): Path to the video.

    Returns:
        Path: Validated Path object.

    Raises:
        FileNotFoundError
        ValueError
    """

    path = Path(video_path)

    if not path.exists():
        raise FileNotFoundError(f"Video not found: {path}")

    if path.suffix.lower() not in SUPPORTED_EXTENSIONS:
        raise ValueError(
            f"Unsupported video format: {path.suffix}"
        )

    return path


def load_video(video_path: str) -> cv2.VideoCapture:
    """
    Load the video using OpenCV.

    Args:
        video_path (str): Path to the video.

    Returns:
        cv2.VideoCapture

    Raises:
        IOError
    """

    path = validate_video(video_path)

    cap = cv2.VideoCapture(str(path))

    if not cap.isOpened():
        raise IOError(f"Unable to open video: {path}")

    return cap


def release_video(cap: cv2.VideoCapture) -> None:
    """
    Safely release the video resource.
    """

    if cap is not None:
        cap.release()