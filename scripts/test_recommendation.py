import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.append(str(ROOT))

from ml.evaluation_engine.recommendation import (
    generate_recommendation
)

with open("results/features_debug.json") as f:
    features = json.load(f)

evaluation = {
    "overall_score": 70.27
}

result = generate_recommendation(
    evaluation,
    features
)

print(result)