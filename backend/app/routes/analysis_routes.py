from flask import Blueprint, jsonify

from backend.app.services.analysis_service import (
    analyze_video
)

analysis_bp = Blueprint(
    "analysis",
    __name__
)


@analysis_bp.route(
    "/analyze",
    methods=["POST"]
)
def analyze():

    result = analyze_video(
        "datasets/badminton/singles_match.mp4"
    )

    return jsonify(result)