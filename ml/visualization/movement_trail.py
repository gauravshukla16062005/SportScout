"""
movement_trail.py

Generate player movement trail
using ByteTrack trajectories.
"""

import cv2
import numpy as np
import os


def generate_movement_trail(
    tracks,
    output_path="results/movement_trail.png",
    target_track_id=1
):
    """
    Draw player movement path.
    """

    if not tracks:
        return

    os.makedirs(
        "results",
        exist_ok=True
    )

    # Match video size
    canvas = np.zeros(
        (1920, 1080, 3),
        dtype=np.uint8
    )

    points = []
    count = 0

    for track in tracks:

        # Optional: only track one player
        if track["track_id"] != target_track_id:
            continue

        x1, y1, x2, y2 = track["bbox"]

        center_x = int((x1 + x2) / 2)
        center_y = int((y1 + y2) / 2)

        if count < 5:
            print(
                f"Center -> ({center_x}, {center_y})"
            )
            count += 1

        if (
            0 <= center_x < 1080
            and
            0 <= center_y < 1920
        ):
            points.append(
                (center_x, center_y)
            )

    print(
        f"Total Points: {len(points)}"
    )

    if len(points) < 2:

        print(
            "Not enough points for movement trail"
        )
        return

    for i in range(
        1,
        len(points)
    ):

        cv2.line(
            canvas,
            points[i - 1],
            points[i],
            (0, 255, 0),
            4
        )

    for point in points:

        cv2.circle(
            canvas,
            point,
            6,
            (255, 255, 255),
            -1
        )

    cv2.imwrite(
        output_path,
        canvas
    )

    print(
        f"Saved Trail -> {output_path}"
    )