import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from ml.tracking.tracker import ByteTracker

print("Loading tracker...")

tracker = ByteTracker("models/best.pt")

print("Running tracking...")

results = tracker.track_video(
    "datasets/badminton/test.mp4"
)

print("\nTotal Results:")
print(len(results))

print("\nFirst 5 Results:")
print(results[:5])
