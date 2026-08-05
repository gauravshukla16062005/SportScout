# 🏆 SportScout

> AI-powered Multi-Sport Talent Identification & Skill Assessment Platform

SportScout is an AI-driven sports analytics platform that objectively evaluates athletes from a simple smartphone-recorded video using computer vision, pose estimation, biomechanics, player tracking, and explainable AI.

The platform is designed to assist coaches, academies, sports authorities, and talent scouts in identifying promising athletes through standardized skill assessment.

---

# Vision

India possesses enormous sporting talent, but early-stage player identification still depends heavily on subjective evaluation and access to experienced coaches.

SportScout aims to democratize sports talent identification by providing an AI-assisted evaluation system that analyzes player movement, technique, biomechanics, and sport-specific skills from a single uploaded video.

The prototype focuses on **Badminton** due to SIH timeline constraints.

The complete platform is designed to support multiple Indian sports including:

- Badminton
- Cricket
- Football
- Hockey
- Kabaddi
- Volleyball
- Basketball
- Athletics
- Table Tennis
- Tennis

---

# Problem Statement

Traditional talent identification suffers from:

- Subjective judgment
- Limited access to expert coaches
- Inconsistent evaluation standards
- High scouting costs
- Lack of data-driven insights

SportScout introduces objective AI-assisted evaluation for preliminary talent screening.

---

# Objectives

- Analyze athlete performance from smartphone videos
- Detect body posture using AI
- Detect sports equipment
- Track player movement
- Extract biomechanics
- Compute sport-specific performance metrics
- Generate objective skill scores
- Produce explainable reports
- Assist coaches in preliminary player selection

---

# System Architecture

User Uploads Video

↓

OpenCV

↓

RTMPose

↓

YOLOv11

↓

ByteTrack

↓

Feature Extraction Engine

↓

Skill Evaluation Engine

↓

Explainable Report Generator

---

# AI Pipeline

## Step 1 — OpenCV

Responsibilities

- Read uploaded videos
- Extract frames
- Resize frames
- Frame normalization
- Brightness correction
- Noise reduction
- Video preprocessing

Output

```
Frames
```

---

## Step 2 — RTMPose

Human pose estimation.

Detects

- Head
- Neck
- Shoulder
- Elbow
- Wrist
- Hip
- Knee
- Ankle
- Foot
- Hand landmarks

Outputs

```
(x,y,confidence)
```

Used for

- Joint angles
- Body posture
- Balance
- Motion analysis

Model

RTMPose

---

## Step 3 — YOLOv11

Object Detection

Detects

- Player
- Racket
- Shuttlecock

Future

- Ball
- Bat
- Goalposts
- Sports equipment

Outputs

Bounding boxes

Confidence score

Object class

---

## Step 4 — ByteTrack

Tracks

- Player
- Racket
- Shuttle

Across video frames.

Provides

- Movement trajectory
- Speed
- Acceleration
- Direction
- Recovery movement

---

## Step 5 — Feature Extraction Engine

Custom module.

Converts raw detections into sports intelligence.

Current Badminton Features

- Footwork
- Split Step
- Balance
- Recovery
- Wrist Mechanics
- Court Coverage
- Stroke Recognition

Future

Each sport will have its own feature extraction module.

Example

Cricket

- Bat Swing
- Bowling Action
- Head Position

Football

- Passing
- Sprint Speed
- Ball Control

Kabaddi

- Raid Pattern
- Agility

etc.

---

## Step 6 — Skill Evaluation Engine

Core innovation.

Combines extracted features into quantitative skill scores.

Example

Footwork

25%

Balance

15%

Recovery

15%

Stroke Technique

20%

Split Step

15%

Wrist Mechanics

10%

Outputs

Overall Score

Talent Grade

Strengths

Weaknesses

Selection Recommendation

---

## Step 7 — Explainable AI Report

Instead of only giving scores,

SportScout explains WHY.

Example

Overall Score

87/100

Strengths

✓ Excellent Footwork

✓ Fast Recovery

✓ Good Balance

Needs Improvement

• Wrist Snap

• Late Split Step

• Weak Backcourt Coverage

Visualizations

- Court Heatmap
- Joint Angle Graph
- Radar Chart
- Movement Path
- Timeline
- Performance Comparison

---

# Current Prototype

Supported Sport

✅ Badminton

---

# Future Roadmap

Support

- Cricket
- Football
- Hockey
- Kabaddi
- Volleyball
- Basketball
- Athletics
- Tennis
- Table Tennis

---

# Tech Stack

Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Recharts

Backend

- FastAPI
- Python
- Node.js (Authentication & APIs)
- Express.js

AI / ML

- PyTorch
- RTMPose
- YOLOv11
- ByteTrack
- OpenCV
- NumPy
- Pandas
- SciPy

Database

- PostgreSQL
- MongoDB
- Redis

Storage

- MinIO
- AWS S3 (Future)

Deployment

- Docker
- Nginx
- GitHub Actions

Visualization

- Plotly
- Matplotlib

---

# AI Models

| Model | Purpose |
|----------|----------------|
| RTMPose | Pose Estimation |
| YOLOv11 | Object Detection |
| ByteTrack | Object Tracking |
| Feature Engine | Custom Sports Analytics |
| Skill Engine | AI Skill Evaluation |
| XAI Engine | Explainable Reports |

---

# Folder Structure

See project structure below.

---

# Future Enhancements

- Multi-camera support
- Real-time inference
- Mobile App
- Athlete Database
- AI Coach
- Personalized Training Plans
- Injury Risk Prediction
- Coach Dashboard
- National Talent Database

---

# License

MIT License

---

# Contributors

Team SportScout
Smart India Hackathon 2026
