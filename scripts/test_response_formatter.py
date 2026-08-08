from backend.app.utils.response_formatter import (
    format_analysis_response
)

response = format_analysis_response(
    metadata={"video": "match.mp4"},
    features={"footwork": 85},
    evaluation={"overall_score": 82},
    recommendation={"advice": "Improve recovery"}
)

print(response)