# SportScout Data Contract

## Overview

SportScout is an AI-powered sports talent assessment platform that analyzes an athlete's performance from a single uploaded video.

The complete pipeline consists of multiple independent modules developed by different team members. Each module receives standardized input, performs a specific task, and returns standardized output for the next module.

This document defines the data exchanged between modules to ensure seamless integration and avoid conflicts during development.

---

## AI Pipeline

User Upload Video
        │
        ▼
OpenCV Preprocessing
        │
        ▼
RTMPose Pose Estimation
        │
        ▼
YOLOv11 Object Detection
        │
        ▼
ByteTrack Multi-Object Tracking
        │
        ▼
Feature Extraction Engine
        │
        ▼
Skill Evaluation Engine
        │
        ▼
Explainable Report Generation

---

## Module Responsibilities

| Module | Responsibility |
|---------|---------------|
| OpenCV | Load video, preprocess frames, extract metadata |
| RTMPose | Detect human body keypoints |
| YOLOv11 | Detect player, racket and shuttlecock |
| ByteTrack | Track detected objects across video frames |
| Feature Extraction | Compute badminton-specific performance metrics |
| Skill Evaluation | Generate weighted scores and talent assessment |
| Explainable Report | Produce interpretable performance analysis |



---

# 1. OpenCV Preprocessing Module

## Responsibility

The OpenCV preprocessing module is responsible for preparing the uploaded sports video for AI analysis.

It loads the input video, extracts metadata, converts the video into image frames, applies basic preprocessing operations, and provides standardized RGB frames to the downstream AI models.

---

## Input

```text
Video File (.mp4)
```

Example

```text
datasets/badminton/test.mp4
```

---

## Processing Steps

1. Load video using OpenCV
2. Validate video file
3. Extract metadata
4. Extract all frames
5. Resize frames to 1280 × 720
6. Convert BGR → RGB
7. Return standardized output

---

## Output

```python
{
    "metadata": {...},
    "frames": [...]
}
```

---

## Metadata Format

```python
{
    "video_name": "test.mp4",
    "video_path": "datasets/badminton/test.mp4",
    "fps": 30.0,
    "frame_count": 502,
    "width": 1080,
    "height": 1920,
    "processed_width": 1280,
    "processed_height": 720,
    "duration": 16.73
}
```

---

## Frames Format

```python
frames = [
    numpy.ndarray,
    numpy.ndarray,
    numpy.ndarray,
    ...
]
```

Each frame has

```python
shape = (720, 1280, 3)
dtype = uint8
color = RGB
```

---

## Output Contract

The preprocessing module always returns

```python
{
    "metadata": metadata,
    "frames": frames
}
```

This structure must remain unchanged so that RTMPose and YOLO modules can integrate without modifications.

---

## Consumers

The output of this module is consumed by

- RTMPose
- YOLOv11

Both modules receive identical preprocessed RGB frames.





---

# 2. RTMPose Module

## Responsibility

The RTMPose module estimates the human body pose from every preprocessed RGB frame.

It detects anatomical landmarks (keypoints) representing different body joints and returns their coordinates with confidence scores.

These keypoints are later used by the Feature Extraction Engine to compute biomechanics-based performance metrics.

---

## Input

```python
{
    "metadata": {...},
    "frames": [...]
}
```

The frames are received from the OpenCV preprocessing module.

---

## Processing

For every frame:

1. Detect player
2. Estimate body pose
3. Predict keypoints
4. Assign confidence score

---

## Output

```python
[
    {
        "frame_id": 0,
        "keypoints": [...]
    },
    {
        "frame_id": 1,
        "keypoints": [...]
    }
]
```

---

## Keypoint Format

Each detected keypoint contains

```python
{
    "id": 0,
    "name": "nose",
    "x": 315.8,
    "y": 140.3,
    "confidence": 0.99
}
```

---

## Frame Output Example

```python
{
    "frame_id": 15,
    "keypoints": [
        {
            "id": 0,
            "name": "nose",
            "x": 315,
            "y": 145,
            "confidence": 0.99
        },
        {
            "id": 1,
            "name": "left_eye",
            "x": 308,
            "y": 138,
            "confidence": 0.98
        }
    ]
}
```

---

## Consumers

The RTMPose output is consumed by

- Feature Extraction Engine

The Feature Extraction Engine uses these keypoints to calculate

- Footwork
- Balance
- Wrist Mechanics
- Split Step
- Recovery
- Body Stability



---

# 3. YOLOv11 Object Detection Module

## Responsibility

The YOLOv11 module detects badminton-specific objects from every preprocessed RGB frame.

Each detected object is represented by a bounding box, class label, and confidence score.

The output of this module is passed directly to the ByteTrack module for multi-object tracking.

---

## Input

```python
{
    "metadata": {...},
    "frames": [...]
}
```

The frames are received from the OpenCV preprocessing module.

---

## Processing

For every frame

1. Detect player
2. Detect racket
3. Detect shuttlecock
4. Assign confidence score
5. Generate bounding boxes

---

## Output

```python
[
    {
        "frame_id": 0,
        "detections": [...]
    },
    {
        "frame_id": 1,
        "detections": [...]
    }
]
```

---

## Detection Format

Each detected object contains

```python
{
    "class_id": 0,
    "class_name": "player",
    "confidence": 0.98,
    "bbox": [
        x1,
        y1,
        x2,
        y2
    ]
}
```

---

## Frame Output Example

```python
{
    "frame_id": 25,
    "detections": [
        {
            "class_id": 0,
            "class_name": "player",
            "confidence": 0.99,
            "bbox": [
                220,
                140,
                610,
                1080
            ]
        },
        {
            "class_id": 1,
            "class_name": "racket",
            "confidence": 0.95,
            "bbox": [
                480,
                260,
                580,
                610
            ]
        },
        {
            "class_id": 2,
            "class_name": "shuttlecock",
            "confidence": 0.91,
            "bbox": [
                690,
                210,
                705,
                225
            ]
        }
    ]
}
```

---

## Consumers

The YOLOv11 output is consumed by

- ByteTrack

ByteTrack assigns persistent track IDs to every detected object across consecutive frames.






---

# 4. ByteTrack Module

## Responsibility

The ByteTrack module assigns persistent tracking IDs to every object detected by YOLOv11.

Instead of treating every frame independently, ByteTrack associates detections across consecutive frames and produces continuous object trajectories.

The generated trajectories are later used for movement analysis and badminton-specific feature extraction.

---

## Input

YOLOv11 detection results.

```python
[
    {
        "frame_id": 0,
        "detections": [...]
    }
]
```

---

## Processing

For every detected object

1. Associate detection with previous frame
2. Assign Track ID
3. Maintain trajectory
4. Remove lost tracks
5. Create new tracks when necessary

---

## Output

```python
[
    {
        "frame_id": 0,
        "track_id": 1,
        "class_id": 0,
        "class_name": "player",
        "confidence": 0.98,
        "bbox": [
            x1,
            y1,
            x2,
            y2
        ]
    }
]
```

---

## Output Example

```python
[
    {
        "frame_id": 0,
        "track_id": 1,
        "class_id": 0,
        "class_name": "player",
        "confidence": 0.98,
        "bbox": [
            220,
            140,
            610,
            1080
        ]
    },

    {
        "frame_id": 0,
        "track_id": 2,
        "class_id": 1,
        "class_name": "racket",
        "confidence": 0.95,
        "bbox": [
            480,
            260,
            580,
            610
        ]
    }
]
```

---

## Output Contract

Each tracked object must always contain

- Frame ID
- Track ID
- Object Class
- Confidence Score
- Bounding Box

This standardized structure ensures compatibility with the Feature Extraction Engine.

---

## Consumers

The ByteTrack output is consumed by

- Feature Extraction Engine

The Feature Extraction Engine uses tracked trajectories to compute

- Player movement
- Court coverage
- Recovery speed
- Movement distance
- Object trajectories