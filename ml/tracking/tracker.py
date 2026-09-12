"""
tracker.py

YOLO11 + ByteTrack wrapper for SportScout.
Tracks only PERSON class.
"""

from ultralytics import YOLO


class ByteTracker:
    """
    YOLO11 + ByteTrack tracker.
    """

    PERSON_CLASS = 0

    def __init__(self, model_path: str):
        """
        Initialize YOLO model.
        """

        print("\nLOADING MODEL:")
        print(model_path)

        self.model = YOLO(model_path)

    def track_video(self, video_path: str):
        """
        Track persons in video.

        Returns:
            list: tracking results
        """

        results = self.model.track(
            source=video_path,
            tracker="bytetrack.yaml",
            classes=[self.PERSON_CLASS],
            conf=0.25,
            persist=True,
            stream=True,
            verbose=False,
        )

        tracks = []

        print("\nYOLO11 + BYTE TRACK")

        frame_no = 0

        # Same sampling used by RTMPose
        sample_rate = 6

        for r in results:

            frame_no += 1

            # Process only every 6th frame
            if frame_no % sample_rate != 0:
                continue

            if r.boxes is None:
                continue

            if len(r.boxes) == 0:
                continue

            boxes = r.boxes.xyxy.cpu().numpy()
            confs = r.boxes.conf.cpu().numpy()

            ids = None

            if r.boxes.id is not None:
                ids = r.boxes.id.cpu().numpy()

            # Print progress only occasionally
            if frame_no % 60 == 0:
                print(
                    f"Tracking Progress -> Frame {frame_no} | Persons: {len(boxes)}"
                )

            for i in range(len(boxes)):

                track_id = (
                    int(ids[i])
                    if ids is not None
                    else -1
                )

                x1, y1, x2, y2 = boxes[i]

                tracks.append(
                    {
                        "frame": frame_no,
                        "track_id": track_id,
                        "bbox": [
                            float(x1),
                            float(y1),
                            float(x2),
                            float(y2),
                        ],
                        "confidence": float(confs[i]),
                    }
                )

        print(f"\nTRACKS FOUND: {len(tracks)}")

        if len(tracks) > 0:
            print("\nSAMPLE TRACK:")
            print(tracks[0])

        return tracks