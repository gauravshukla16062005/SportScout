from ultralytics import YOLO

model = YOLO("models/best.pt")

results = model(
    "data/test/images/IMAGE_NAME.jpg",
    conf=0.05
)

print("Detections:", len(results[0].boxes))

if len(results[0].boxes) > 0:
    print(results[0].boxes.cls)
    print(results[0].boxes.conf)