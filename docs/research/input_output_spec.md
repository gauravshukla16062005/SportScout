# Input Output Specification

## YOLO Output

Expected:

{
  "frame_id": 1,
  "class_id": 0,
  "confidence": 0.95,
  "bbox": [x1, y1, x2, y2]
}

---

## ByteTrack Output

Expected:

{
  "frame_id": 1,
  "track_id": 5,
  "class_id": 0,
  "bbox": [x1, y1, x2, y2]
}

---

## RTMPose Output

Expected:

{
  "frame_id": 1,
  "track_id": 5,
  "keypoints": [
    [x, y, conf],
    [x, y, conf]
  ]
}

---

## Feature Engine Input

{
  "tracks": [],
  "keypoints": []
}

---

## Evaluation Engine Input

{
  "footwork": {},
  "court_coverage": {},
  "recovery": {},
  "balance": {}
}

---

## Explainability Engine Input

{
  "feature_scores": {},
  "overall_score": 0
}