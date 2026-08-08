from flask import Blueprint, jsonify, request

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

    if "video" not in request.files:
        return jsonify({
            "success": False,
            "message": "No video uploaded"
        }), 400

    video = request.files["video"]

    from backend.app.services.upload_service import (
        validate_video,
        generate_video_filename,
        get_upload_path
    )

    if not validate_video(video.filename):
        return jsonify({
            "success": False,
            "message": "Invalid video format"
        }), 400

    filename = generate_video_filename(
        video.filename
    )

    filepath = get_upload_path(
        filename
    )

    video.save(filepath)

    result = analyze_video(
        str(filepath)
    )

    return jsonify(result)