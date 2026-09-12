from ultralytics import YOLO

model = YOLO("yolo11n.pt")

results = model.predict(
    "sample_frame.jpg",
    conf=0.25
)

print(results[0].boxes)