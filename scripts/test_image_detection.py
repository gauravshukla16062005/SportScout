from ultralytics import YOLO

model = YOLO("models/best.pt")

results = model.predict(
    source="datasets/badminton/test.mp4",
    conf=0.001,
    save=True
)

total = 0

for r in results:
    total += len(r.boxes)

print("Total detections:", total)