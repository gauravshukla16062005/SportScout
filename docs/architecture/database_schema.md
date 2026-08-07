# SportScout Database Schema

## Purpose

The database stores:

* User information
* Uploaded videos
* Analysis results
* Feature scores
* Generated reports

---

# Table: Users

## Description

Stores registered users of the platform.

| Field      | Type         | Description       |
| ---------- | ------------ | ----------------- |
| id         | UUID         | Primary Key       |
| name       | VARCHAR(100) | User name         |
| email      | VARCHAR(255) | Unique email      |
| role       | VARCHAR(50)  | User role         |
| created_at | TIMESTAMP    | Registration date |

---

# Table: Videos

## Description

Stores uploaded badminton videos.

| Field       | Type         | Description                       |
| ----------- | ------------ | --------------------------------- |
| id          | UUID         | Primary Key                       |
| user_id     | UUID         | References Users(id)              |
| video_name  | VARCHAR(255) | Video file name                   |
| upload_time | TIMESTAMP    | Upload timestamp                  |
| status      | VARCHAR(50)  | Uploaded / Processing / Completed |
| duration    | FLOAT        | Video duration                    |
| fps         | FLOAT        | Frames per second                 |

---

# Table: Analysis

## Description

Stores final analysis results.

| Field          | Type      | Description           |
| -------------- | --------- | --------------------- |
| id             | UUID      | Primary Key           |
| video_id       | UUID      | References Videos(id) |
| overall_score  | FLOAT     | Overall player score  |
| recommendation | TEXT      | Final recommendation  |
| created_at     | TIMESTAMP | Analysis time         |

---

# Table: FeatureScores

## Description

Stores detailed feature evaluation scores.

| Field          | Type  | Description             |
| -------------- | ----- | ----------------------- |
| id             | UUID  | Primary Key             |
| analysis_id    | UUID  | References Analysis(id) |
| footwork       | FLOAT | Footwork score          |
| balance        | FLOAT | Balance score           |
| recovery       | FLOAT | Recovery score          |
| court_coverage | FLOAT | Court coverage score    |
| wrist_motion   | FLOAT | Wrist motion score      |
| split_step     | FLOAT | Split-step score        |

---

# Table: Reports

## Description

Stores generated reports.

| Field             | Type      | Description             |
| ----------------- | --------- | ----------------------- |
| id                | UUID      | Primary Key             |
| analysis_id       | UUID      | References Analysis(id) |
| strengths         | TEXT      | Strength areas          |
| improvement_areas | TEXT      | Areas to improve        |
| feedback          | TEXT      | Detailed feedback       |
| generated_at      | TIMESTAMP | Report creation time    |

---

# Relationships

```text id="o2t0sq"
Users
  │
  └── Videos
         │
         └── Analysis
                  │
          ┌───────┴────────┐
          ▼                ▼
    FeatureScores      Reports
```

---

# Future Extensions

Possible future tables:

* Training History
* Match Statistics
* Coach Feedback
* Injury Monitoring
* Athlete Performance Trends
