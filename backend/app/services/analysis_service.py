"""
analysis_service.py
"""

from ml.pipeline import run_pipeline

from backend.app.utils.response_formatter import (
    format_analysis_response
)

def analyze_video(video_path: str):

    result = run_pipeline(video_path)

    return format_analysis_response(
        result["metadata"],
        result["features"],
        result["evaluation"],
        result["recommendation"]
    )