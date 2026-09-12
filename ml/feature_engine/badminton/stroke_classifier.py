import math


def classify_stroke(keypoints, tracks):

    if not keypoints:
        return {
            "stroke": "Unknown",
            "confidence": 0.0
        }

    wrist_speeds = []

    prev_wrist = None

    for frame in keypoints:

        persons = frame.get("keypoints")

        if not persons:
            continue

        person = persons[0]

        if len(person) < 11:
            continue

        wrist = person[10]

        if prev_wrist is not None:

            dx = wrist[0] - prev_wrist[0]
            dy = wrist[1] - prev_wrist[1]

            speed = math.sqrt(dx * dx + dy * dy)

            wrist_speeds.append(speed)

        prev_wrist = wrist

    if not wrist_speeds:
        return {
            "stroke": "Unknown",
            "confidence": 0.0
        }

    peak_speed = max(wrist_speeds)

    if peak_speed > 180:
        stroke = "Smash"

    elif peak_speed > 120:
        stroke = "Drive"

    elif peak_speed > 80:
        stroke = "Clear"

    else:
        stroke = "Drop"

    confidence = min(
        0.95,
        peak_speed / 200
    )

    return {
        "stroke": stroke,
        "confidence": round(confidence, 2)
    }