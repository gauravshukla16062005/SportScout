"""
analysis_service.py

Connects backend routes with the ML pipeline.
"""

from ml.pipeline import run_pipeline


def analyze_video(video_path: str):
    """
    Run complete analysis pipeline.
    """

    result = run_pipeline(video_path)

    return result