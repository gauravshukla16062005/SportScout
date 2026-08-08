"""
image_processing.py

Basic image preprocessing for SportScout.
"""

from typing import List, Tuple

import cv2
import numpy as np


def resize_frame(
    frame: np.ndarray,
    size: Tuple[int, int] = (1280, 720)
) -> np.ndarray:
    """
    Resize a frame.

    Args:
        frame:
            Input image.

        size:
            (width, height)

    Returns:
        Resized frame.
    """

    return cv2.resize(frame, size)


def convert_bgr_to_rgb(
    frame: np.ndarray
) -> np.ndarray:
    """
    Convert OpenCV BGR image to RGB.
    """

    return cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)


def process_frame(
    frame: np.ndarray,
    size: Tuple[int, int] = (1280, 720)
) -> np.ndarray:
    """
    Apply preprocessing to a single frame.
    """

    frame = resize_frame(frame, size)

    frame = convert_bgr_to_rgb(frame)

    return frame


def process_frames(
    frames: List[np.ndarray],
    size: Tuple[int, int] = (1280, 720)
) -> List[np.ndarray]:
    """
    Apply preprocessing to all frames.
    """

    processed = []

    for frame in frames:

        processed.append(process_frame(frame, size))

    return processed