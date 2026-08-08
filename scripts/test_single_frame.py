from ultralytics import YOLO
import cv2

model = YOLO("models/best.pt")

cap = cv2.VideoCapture(
    "datasets/badminton/test.mp4"
)

ret, frame = cap.read()

results = model(frame)

print(results[0].boxes)
print("Detections:", len(results[0].boxes))