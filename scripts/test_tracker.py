from pathlib import Path

MODEL_PATH = Path("weights/best.pt")

if MODEL_PATH.exists():
    print("Model found. Ready for ByteTrack testing.")
else:
    print("Waiting for YOLO model...")