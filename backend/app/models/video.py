"""
video.py

Video model for SportScout.
"""

from datetime import datetime


class Video:
    """
    Represents an uploaded badminton video.
    """

    def __init__(
        self,
        video_id: str,
        user_id: str,
        filename: str,
        filepath: str,
        status: str = "uploaded"
    ):
        self.video_id = video_id
        self.user_id = user_id
        self.filename = filename
        self.filepath = filepath
        self.status = status

        self.upload_time = datetime.utcnow()

        self.duration = None
        self.fps = None

    def to_dict(self):
        return {
            "video_id": self.video_id,
            "user_id": self.user_id,
            "filename": self.filename,
            "filepath": self.filepath,
            "status": self.status,
            "upload_time": self.upload_time.isoformat(),
            "duration": self.duration,
            "fps": self.fps
        }