"""
Player speed estimation using ByteTrack.
"""

import math


def calculate_player_speed(tracks):

    if not tracks:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "No tracking data"
        }

    player_tracks = {}

    for track in tracks:

        track_id = track["track_id"]

        x1, y1, x2, y2 = track["bbox"]

        center_x = (x1 + x2) / 2
        center_y = (y1 + y2) / 2

        if track_id not in player_tracks:
            player_tracks[track_id] = []

        player_tracks[track_id].append(
            (center_x, center_y)
        )

    main_player = max(
        player_tracks,
        key=lambda x: len(player_tracks[x])
    )

    positions = player_tracks[main_player]

    speeds = []

    for i in range(1, len(positions)):

        x1, y1 = positions[i - 1]
        x2, y2 = positions[i]

        distance = math.sqrt(
            (x2 - x1) ** 2 +
            (y2 - y1) ** 2
        )

        speeds.append(distance)

    if not speeds:
        return {
            "score": 0.0,
            "metrics": {},
            "remarks": "Insufficient tracking data"
        }

    avg_speed = sum(speeds) / len(speeds)
    max_speed = max(speeds)

    score = max(
    0.0,
    min(
        100.0,
        (avg_speed / 100) * 100
    )
)

    return {
        "score": round(score, 2),
        "metrics": {
            "average_speed": round(avg_speed, 2),
            "max_speed": round(max_speed, 2),
            "samples": len(speeds)
        },
        "remarks": "Estimated from ByteTrack movement"
    }