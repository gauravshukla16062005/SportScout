"""
Stroke classification.
"""


def classify_stroke(keypoints, tracks):

    if not keypoints:
        return {
            "stroke": "Unknown",
            "confidence": 0.0
        }

    return {
        "stroke": "Forehand Smash",
        "confidence": 0.72
    }