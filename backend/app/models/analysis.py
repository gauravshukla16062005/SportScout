"""
analysis.py

Analysis model for SportScout.
"""

from datetime import datetime


class Analysis:
    """
    Represents the result of a video analysis.
    """

    def __init__(
        self,
        analysis_id: str,
        video_id: str,
        overall_score: float = 0.0,
        recommendation: str = ""
    ):
        self.analysis_id = analysis_id
        self.video_id = video_id

        self.overall_score = overall_score
        self.recommendation = recommendation

        self.created_at = datetime.utcnow()

    def to_dict(self):
        return {
            "analysis_id": self.analysis_id,
            "video_id": self.video_id,
            "overall_score": self.overall_score,
            "recommendation": self.recommendation,
            "created_at": self.created_at.isoformat()
        }