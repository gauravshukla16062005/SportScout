"""
frame_extractor.py

Extract frames from a video using OpenCV.
"""

from typing import List
import cv2
import numpy as np


def extract_frames(cap: cv2.VideoCapture) -> List[np.ndarray]:
    """
    Extract all frames from an opened video.

    Args:
        cap (cv2.VideoCapture):
            OpenCV VideoCapture object.

    Returns:
        List[np.ndarray]:
            List containing all extracted frames.
    """

    frames = []

    while True:

        success, frame = cap.read()

        if not success:
            break

        frames.append(frame)

    return frames