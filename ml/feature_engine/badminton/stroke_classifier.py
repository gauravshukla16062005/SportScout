"""
Stroke classification.
"""


def classify_stroke(keypoints, tracks):
    """
    Classify badminton stroke.

    Returns:
        Stroke prediction.
    """

    return {
        "stroke": "Unknown",
        "confidence": 0.0
    }