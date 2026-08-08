# scripts/test_yolo_video.py

from ultralytics import YOLO

model = YOLO("models/best.pt")

results = model.predict(
    source="datasets/badminton/test.mp4",
    conf=0.01,
    save=True
)

print("Done")