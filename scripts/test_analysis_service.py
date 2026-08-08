from backend.app.services.analysis_service import (
    analyze_video
)

response = analyze_video(
    "datasets/badminton/singles_match.mp4"
)

print(response)