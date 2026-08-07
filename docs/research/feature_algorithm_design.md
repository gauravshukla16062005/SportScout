# SportScout Feature Algorithm Design

## Objective

Define the inputs, metrics, calculations, and outputs required for badminton performance evaluation.

---

# Feature 1: Footwork Analysis

## Purpose

Measure movement efficiency and agility.

---

## Inputs

From RTMPose:

* Left ankle
* Right ankle
* Left knee
* Right knee

From ByteTrack:

* Player track

---

## Metrics

### Distance Travelled

Total player movement across frames.

Formula:

```text id="2l4h7v"
distance = Σ √((x2-x1)² + (y2-y1)²)
```

---

### Average Speed

Formula:

```text id="ytm6b8"
speed = distance / time
```

---

### Direction Changes

Count rapid movement changes.

Higher count generally indicates better agility.

---

## Score

```text id="rzj31h"
0 - 100
```

Based on:

* Speed
* Movement frequency
* Direction changes

---

## Output

```python id="m9x6x5"
{
    "score": 85,
    "distance": 420,
    "average_speed": 3.4,
    "direction_changes": 18
}
```



---

# Feature 2: Court Coverage

## Purpose

Measure how effectively a player utilizes different areas of the badminton court.

A player with good court coverage can reach more areas efficiently and maintain control during rallies.

---

## Inputs

From ByteTrack:

* Player bounding box
* Player center coordinates

From RTMPose (optional):

* Hip center
* Body center

---

## Metrics

### Court Position Mapping

Convert player positions into court coordinates.

Example:

```text id="4n5p89"
Top Left
Top Center
Top Right

Mid Left
Mid Center
Mid Right

Bottom Left
Bottom Center
Bottom Right
```

Court is divided into zones.

---

### Unique Zones Visited

Count how many court zones the player enters.

Formula:

```text id="dz6e1r"
coverage = visited_zones / total_zones
```

---

### Movement Distribution

Measure how evenly the player moves across the court.

A player staying in only one region gets a lower score.

---

### Reach Efficiency

Measure ability to move between distant zones.

---

## Score

```text id="jlwm2k"
0 - 100
```

Based on:

* Zones visited
* Movement distribution
* Reach efficiency

---

## Output

```python id="ovv4sr"
{
    "score": 82,
    "zones_visited": 7,
    "total_zones": 9,
    "coverage_percentage": 77.8
}
```

---

## Interpretation

### High Score

* Covers most of the court
* Reaches corners effectively
* Good movement distribution

### Low Score

* Remains in limited areas
* Poor court reach
* Weak positional coverage

```
```




---

# Feature 3: Recovery Analysis

## Purpose

Measure how quickly a player returns to a ready position after movement or shot execution.

Recovery is critical in badminton because every shot should be followed by repositioning for the next rally action.

---

## Inputs

From ByteTrack:

* Player center coordinates
* Player trajectory

From RTMPose:

* Body keypoints
* Hip position
* Shoulder position

---

## Metrics

### Recovery Time

Time taken to return to a ready position after reaching a target area.

Formula:

```text id="afc46x"
recovery_time = return_frame - movement_frame
```

---

### Recovery Distance

Distance traveled during the return movement.

Formula:

```text id="j9hqlv"
distance = Σ √((x2-x1)² + (y2-y1)²)
```

---

### Recovery Speed

Formula:

```text id="2vrq1u"
speed = recovery_distance / recovery_time
```

---

### Ready Position Consistency

Measure how consistently the player returns near the court center.

---

## Score

```text id="7yjlwm"
0 - 100
```

Based on:

* Recovery speed
* Recovery time
* Ready position consistency

---

## Output

```python id="2y75f6"
{
    "score": 88,
    "average_recovery_time": 1.2,
    "average_recovery_speed": 3.8,
    "ready_position_consistency": 91
}
```

---

## Interpretation

### High Score

* Quickly returns to ready position
* Maintains strong rally preparation
* Efficient court repositioning

### Low Score

* Slow recovery
* Poor repositioning
* Increased vulnerability during rallies

```
```



---

# Feature 4: Balance Analysis

## Purpose

Measure body stability and posture control during movement and shot execution.

Good balance allows a player to move efficiently, recover faster, and execute shots with greater accuracy.

---

## Inputs

From RTMPose:

* Left shoulder
* Right shoulder
* Left hip
* Right hip
* Left knee
* Right knee
* Left ankle
* Right ankle

---

## Metrics

### Body Alignment

Measure alignment between:

```text id="djlwm5"
Shoulders
↓
Hips
↓
Ankles
```

Large deviations may indicate poor balance.

---

### Center of Mass Stability

Approximate the player's center using:

```text id="jlwm8p"
Shoulders
Hips
```

Track movement of the center across frames.

Less unnecessary movement indicates better balance.

---

### Posture Consistency

Measure consistency of body posture throughout the rally.

---

### Landing Stability

After rapid movement or jumps:

* Check body sway
* Check stabilization time

---

## Score

```text id="qvjlwm"
0 - 100
```

Based on:

* Alignment quality
* Center stability
* Posture consistency
* Landing stability

---

## Output

```python id="mjlwm7"
{
    "score": 84,
    "alignment_score": 86,
    "stability_score": 82,
    "posture_consistency": 84
}
```

---

## Interpretation

### High Score

* Stable posture
* Strong body control
* Efficient movement mechanics

### Low Score

* Excessive body sway
* Poor posture control
* Reduced movement efficiency

```id="tzjlwm"
```




---

# Implementation Priority

## Priority 1 (Core Prototype)

These features should be implemented first because they provide the highest value and are easiest to calculate from tracking and pose data.

### Footwork

Required Inputs:

* Player trajectory
* Ankle keypoints

Metrics:

* Distance travelled
* Movement speed
* Direction changes

Expected Output:

```python id="g9u1i8"
{
    "score": 0,
    "distance": 0,
    "average_speed": 0,
    "direction_changes": 0
}
```

---

### Court Coverage

Required Inputs:

* Player positions
* Court zones

Metrics:

* Zones visited
* Coverage percentage

Expected Output:

```python id="c5y4d9"
{
    "score": 0,
    "zones_visited": 0,
    "coverage_percentage": 0
}
```

---

### Recovery

Required Inputs:

* Player trajectory
* Ready position

Metrics:

* Recovery time
* Recovery speed

Expected Output:

```python id="j3k7r1"
{
    "score": 0,
    "average_recovery_time": 0,
    "average_recovery_speed": 0
}
```

---

### Balance

Required Inputs:

* Shoulder keypoints
* Hip keypoints
* Knee keypoints
* Ankle keypoints

Metrics:

* Alignment
* Stability
* Posture consistency

Expected Output:

```python id="v8p2w6"
{
    "score": 0,
    "alignment_score": 0,
    "stability_score": 0
}
```

---

# Priority 2 (Advanced Analysis)

These features require more accurate pose estimation.

### Split Step

Inputs:

* Leg keypoints
* Foot positions

Metrics:

* Split-step timing
* Split-step frequency

---

### Wrist Motion

Inputs:

* Wrist keypoints
* Elbow keypoints

Metrics:

* Wrist speed
* Wrist angle
* Wrist acceleration

---

# Priority 3 (Most Complex)

### Stroke Classification

Inputs:

* Full body keypoints
* Racket detection
* Player trajectory

Possible Classes:

* Smash
* Clear
* Drop
* Drive
* Net Shot
* Lift

Output:

```python id="n6s0q4"
{
    "stroke": "Smash",
    "confidence": 0.92
}
```

---

# Development Roadmap

Phase 1

* Integrate YOLO
* Integrate ByteTrack
* Integrate RTMPose

Phase 2

* Implement Footwork
* Implement Court Coverage
* Implement Recovery
* Implement Balance

Phase 3

* Implement Split Step
* Implement Wrist Motion

Phase 4

* Implement Stroke Classification

Phase 5

* End-to-End Testing
* Performance Optimization
* Backend Integration
* Frontend Visualization




