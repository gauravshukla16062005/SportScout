from backend.app.services.upload_service import (
    validate_video,
    generate_video_filename,
)

print(
    validate_video("match.mp4")
)

print(
    validate_video("notes.pdf")
)

print(
    generate_video_filename(
        "match.mp4"
    )
)
