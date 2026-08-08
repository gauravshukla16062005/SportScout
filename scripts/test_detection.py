from ultralytics import YOLO

model = YOLO("models/best.pt")

results = model.predict(
    source="datasets/badminton/test.mp4",
    conf=0.1,
    save=True
)

print("Prediction completed")

for r in results:
    print("Detections:", len(r.boxes))