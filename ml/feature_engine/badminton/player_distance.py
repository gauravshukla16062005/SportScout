"""
Player movement distance analysis using ByteTrack.
"""

import math


def calculate_player_distance(tracks):

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

    total_distance = 0.0

    for i in range(1, len(positions)):

        x1, y1 = positions[i - 1]
        x2, y2 = positions[i]

        distance = math.sqrt(
            (x2 - x1) ** 2 +
            (y2 - y1) ** 2
        )

        total_distance += distance

    avg_step = (
        total_distance / max(1, len(positions) - 1)
    )

    score = max(
    0.0,
    min(
        100.0,
        (total_distance / 15000) * 100
    )
)

    return {
        "score": round(score, 2),
        "metrics": {
            "distance_moved": round(total_distance, 2),
            "average_step": round(avg_step, 2),
            "track_points": len(positions)
        },
        "remarks": "Calculated using ByteTrack trajectory"
    }