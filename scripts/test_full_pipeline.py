"""
Test the complete SportScout pipeline using mock data.
"""

from pprint import pprint

from test_data.mock_keypoints import MOCK_KEYPOINTS
from test_data.mock_tracks import MOCK_TRACKS

from ml.feature_engine.badminton import extract_features
from ml.evaluation_engine import (
    evaluate_player,
    generate_recommendation,
)
from ml.explainability import generate_report


def main():
    print("=" * 60)
    print("SportScout Mock Pipeline Test")
    print("=" * 60)

    # Feature Extraction
    features = extract_features(
        MOCK_KEYPOINTS,
        MOCK_TRACKS,
    )

    print("\nFeatures")
    pprint(features)

    # Evaluation
    evaluation = evaluate_player(features)

    print("\nEvaluation")
    pprint(evaluation)

    # Recommendation
    recommendation = generate_recommendation(
        evaluation
    )

    print("\nRecommendation")
    pprint(recommendation)

    # Explainability
    report = generate_report(
        evaluation,
        recommendation,
    )

    print("\nFinal Report")
    pprint(report)


if __name__ == "__main__":
    main()