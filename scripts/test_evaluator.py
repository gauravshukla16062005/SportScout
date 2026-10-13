import sys
from pathlib import Path

sys.path.append(
    str(Path(__file__).resolve().parent.parent)
)


import json

from ml.evaluation_engine.evaluator import (
    evaluate_player
)

with open(
    "results/features_debug.json",
    "r"
) as f:
    features = json.load(f)

result = evaluate_player(
    features
)

print(result)