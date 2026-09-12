"""
player_heatmap.py

Generate player movement heatmap
from ByteTrack trajectories.
"""

import cv2
import numpy as np
import os


def generate_player_heatmap(
    tracks,
    output_path="results/player_heatmap.png",
    target_track_id=1
):
    """
    Generate heatmap showing
    where the player spends
    most of the time.
    """

    if not tracks:
        return

    os.makedirs(
        "results",
        exist_ok=True
    )

    # height=1920, width=1080
    heatmap = np.zeros(
        (1920, 1080),
        dtype=np.float32
    )

    valid_points = 0
    count = 0

    for track in tracks:

        # Optional:
        # Only visualize one player
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

            cv2.circle(
    heatmap,
    (center_x, center_y),
    25,
    1,
    -1
)

            valid_points += 1

    print(
        f"Valid Heatmap Points: {valid_points}"
    )

    if valid_points == 0:
        print(
            "No valid player positions for heatmap"
        )
        return

    heatmap = cv2.GaussianBlur(
    heatmap,
    (61, 61),
    0
)

    heatmap = cv2.normalize(
        heatmap,
        None,
        0,
        255,
        cv2.NORM_MINMAX
    )
    print(
    "Heatmap Max Value:",
    np.max(heatmap)
)

    heatmap = heatmap.astype(
        np.uint8
    )

    heatmap = cv2.applyColorMap(
    heatmap,
    cv2.COLORMAP_TURBO
)

    cv2.imwrite(
        output_path,
        heatmap
    )

    print(
        f"Saved Heatmap -> {output_path}"
    )