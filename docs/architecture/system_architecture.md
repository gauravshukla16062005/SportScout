# SportScout System Architecture

## Overview

SportScout is an AI-powered badminton performance analysis platform that evaluates player movement, posture, recovery, court coverage, and stroke execution from uploaded match or practice videos.

The system combines computer vision, object detection, pose estimation, multi-object tracking, feature extraction, evaluation, and explainability into a single analysis pipeline.

---

# High-Level Architecture

```text
Frontend
    │
    ▼
Backend API
    │
    ▼
Video Upload
    │
    ▼
ML Pipeline
    │
    ├── OpenCV Preprocessing
    ├── YOLO Detection
    ├── ByteTrack Tracking
    ├── RTMPose Estimation
    ├── Feature Extraction
    ├── Evaluation Engine
    └── Explainability Engine
    │
    ▼
Analysis Result
    │
    ▼
Frontend Dashboard
```

---

# Workflow

## Step 1: Video Upload

The user uploads a badminton video through the frontend application.

The backend validates:

* File type
* File size
* Upload status

The video is stored in the uploads directory.

---

## Step 2: OpenCV Preprocessing

The preprocessing module:

* Loads the video
* Extracts metadata
* Extracts frames
* Resizes frames
* Converts BGR to RGB

Output:

* Metadata
* Processed frames

---

## Step 3: YOLO Detection

YOLO detects:

* Players
* Rackets
* Shuttlecock

Output:

* Bounding boxes
* Class labels
* Confidence scores

---

## Step 4: ByteTrack Tracking

ByteTrack assigns consistent IDs across frames.

Output:

* Player trajectories
* Object trajectories
* Track IDs

---

## Step 5: RTMPose Estimation

RTMPose extracts human body keypoints.

Output:

* Joint coordinates
* Pose confidence scores

---

## Step 6: Feature Extraction

The badminton feature engine computes:

* Footwork
* Balance
* Recovery
* Court Coverage
* Wrist Motion
* Split Step
* Stroke Features

Output:

* Feature metrics
* Feature scores

---

## Step 7: Evaluation Engine

The evaluation engine:

* Aggregates feature scores
* Computes overall performance score
* Identifies strengths
* Identifies weaknesses

Output:

* Overall score
* Feature-wise evaluation

---

## Step 8: Explainability Engine

The explainability engine converts numerical results into human-readable feedback.

Output:

* Recommendations
* Improvement areas
* Performance summary

---

## Step 9: Frontend Dashboard

The frontend displays:

* Video metadata
* Feature scores
* Performance insights
* Recommendations
* Final report

---

# Technology Stack

## Frontend

* React.js
* Tailwind CSS

## Backend

* Python
* FastAPI / Flask

## Computer Vision

* OpenCV

## Object Detection

* YOLO

## Tracking

* ByteTrack

## Pose Estimation

* RTMPose

## Version Control

* Git
* GitHub
