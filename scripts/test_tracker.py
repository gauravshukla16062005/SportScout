import sys
from pathlib import Path

# Add project root to Python path
sys.path.append(str(Path(__file__).resolve().parent.parent))

from ml.tracking import ByteTracker

tracker = ByteTracker("models/best.pt")

tracks = tracker.track_video(
    "datasets/badminton/test.mp4"
)

print("\nTRACKS FOUND:", len(tracks))

if len(tracks) > 0:
    print("\nFIRST TRACK:")
    print(tracks[0])