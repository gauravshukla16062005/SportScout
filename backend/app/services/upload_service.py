"""
upload_service.py

Handles video uploads and validation.
"""

from pathlib import Path
from uuid import uuid4


ALLOWED_EXTENSIONS = {
    ".mp4",
    ".avi",
    ".mov",
    ".mkv"
}


def validate_video(filename: str) -> bool:
    """
    Check if uploaded file is a supported video.
    """

    extension = Path(filename).suffix.lower()

    return extension in ALLOWED_EXTENSIONS


def generate_video_filename(
    original_filename: str
) -> str:
    """
    Generate unique filename.
    """

    extension = Path(
        original_filename
    ).suffix.lower()

    return f"{uuid4()}{extension}"


def get_upload_path(
    filename: str
) -> Path:
    """
    Return upload path.
    """

    upload_dir = Path(
        "backend/app/uploads"
    )

    upload_dir.mkdir(
        parents=True,
        exist_ok=True
    )

    return upload_dir / filename