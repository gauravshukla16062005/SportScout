import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent.parent))

from ml.tracking.tracker import ByteTracker

tracker = ByteTracker("models/best.pt")

print("✅ ByteTracker initialized successfully")