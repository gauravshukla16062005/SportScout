import sys
from pathlib import Path
import json

sys.path.append(
    str(Path(__file__).resolve().parent.parent)
)

from ml.feature_engine.badminton.player_profile import (
    generate_player_profile
)

with open(
    "results/features_debug.json",
    "r"
) as f:
    features = json.load(f)

result = generate_player_profile(
    features
)

print(result)