# SportScout ML Pipeline

## Objective

The ML pipeline analyzes badminton videos and generates performance insights using computer vision, tracking, pose estimation, feature extraction, evaluation, and explainability.

---

# Pipeline Flow

```text id="79i2w5"
Input Video
    │
    ▼
OpenCV Preprocessing
    │
    ▼
YOLO Detection
    │
    ▼
ByteTrack Tracking
    │
    ▼
RTMPose Estimation
    │
    ▼
Feature Extraction
    │
    ▼
Evaluation Engine
    │
    ▼
Explainability Engine
    │
    ▼
Final Report
```

---

# Stage 1: OpenCV Preprocessing

## Purpose

Prepare video data for downstream models.

## Components

* Video Loader
* Metadata Extractor
* Frame Extractor
* Image Processor

## Output

```python id="1c9ej3"
{
    "metadata": {},
    "frames": []
}
```

---

# Stage 2: YOLO Detection

## Purpose

Detect badminton-related objects.

## Objects

* Player
* Racket
* Shuttlecock

## Output

```python id="g72dj7"
[
    {
        "class_id": 0,
        "confidence": 0.95,
        "bbox": [x1, y1, x2, y2]
    }
]
```

---

# Stage 3: ByteTrack Tracking

## Purpose

Assign consistent identities across frames.

## Output

```python id="c85f6e"
[
    {
        "frame_id": 0,
        "track_id": 1,
        "class_id": 0,
        "bbox": [...]
    }
]
```

---

# Stage 4: RTMPose Estimation

## Purpose

Extract body keypoints.

## Output

```python id="5m8j38"
[
    {
        "frame_id": 0,
        "keypoints": [...]
    }
]
```

---

# Stage 5: Feature Extraction

## Features

### Footwork

Measures movement quality and efficiency.

### Balance

Measures body stability and posture.

### Recovery

Measures how quickly a player returns to a ready position.

### Court Coverage

Measures movement across the court.

### Wrist Motion

Measures wrist-related stroke mechanics.

### Split Step

Measures readiness before movement.

### Stroke Features

Classifies stroke-related information.

---

# Stage 6: Evaluation Engine

## Purpose

Convert feature metrics into performance scores.

## Output

```python id="wrrg5s"
{
    "overall_score": 85.0,
    "feature_scores": {}
}
```

---

# Stage 7: Explainability Engine

## Purpose

Generate understandable feedback.

## Output

```python id="7i2vxt"
{
    "recommendation": "",
    "strengths": [],
    "improvement_areas": []
}
```

---

# Final Output

```python id="jmk4vw"
{
    "metadata": {},
    "features": {},
    "evaluation": {},
    "recommendation": {}
}
```

---

# Advantages

* Modular architecture
* Easy model replacement
* Explainable results
* Sport-specific analysis
* Scalable for additional sports
