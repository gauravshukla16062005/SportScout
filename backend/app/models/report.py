"""
report.py

Report model for SportScout.
"""

from datetime import datetime


class Report:
    """
    Represents the final explainability report.
    """

    def __init__(
        self,
        report_id: str,
        analysis_id: str,
        strengths=None,
        improvement_areas=None,
        feedback=None
    ):
        self.report_id = report_id
        self.analysis_id = analysis_id

        self.strengths = strengths or []
        self.improvement_areas = improvement_areas or []
        self.feedback = feedback or {}

        self.generated_at = datetime.utcnow()

    def to_dict(self):
        return {
            "report_id": self.report_id,
            "analysis_id": self.analysis_id,
            "strengths": self.strengths,
            "improvement_areas": self.improvement_areas,
            "feedback": self.feedback,
            "generated_at": self.generated_at.isoformat()
        }