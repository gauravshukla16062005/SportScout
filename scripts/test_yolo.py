from ultralytics import YOLO

model = YOLO("models/best.pt")

results = model(
    "datasets/badminton/test.mp4"
)

for i, r in enumerate(results):

    if r.boxes is not None:

        print("FRAME:", i)

        print("DETECTIONS:", len(r.boxes))

        if len(r.boxes) > 0:

            print("CLASSES:", r.boxes.cls)

            print("CONF:", r.boxes.conf)

            break