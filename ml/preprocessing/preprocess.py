"""
preprocess.py

Complete OpenCV preprocessing pipeline for SportScout.
"""

from ml.preprocessing.video_loader import (
    load_video,
    release_video
)

from ml.preprocessing.metadata import (
    extract_metadata
)

from ml.preprocessing.frame_extractor import (
    extract_frames
)

from ml.preprocessing.image_processing import (
    process_frames
)


def preprocess_video(video_path: str) -> dict:
    """
    Complete preprocessing pipeline.

    Args:
        video_path (str):
            Path to input video.

    Returns:
        dict:
            Metadata and processed frames.
    """

    cap = load_video(video_path)

    metadata = extract_metadata(cap, video_path)

    frames = extract_frames(cap)

    processed_frames = process_frames(frames)

    release_video(cap)

    # Free memory used by original frames
    del frames

    return {
        "metadata": metadata,
        "frames": processed_frames
    }