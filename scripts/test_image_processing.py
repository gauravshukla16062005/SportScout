from pathlib import Path

from ml.preprocessing.video_loader import load_video, release_video
from ml.preprocessing.frame_extractor import extract_frames
from ml.preprocessing.image_processing import process_frames

VIDEO_FOLDER = Path("datasets/badminton")


def main():

    for video in VIDEO_FOLDER.glob("*.mp4"):

        print("=" * 60)
        print(video.name)

        try:

            cap = load_video(str(video))

            frames = extract_frames(cap)

            processed = process_frames(frames)

            print("Original Frames :", len(frames))
            print("Processed Frames:", len(processed))

            if processed:
                print("Processed Shape :", processed[0].shape)

            release_video(cap)

        except Exception as e:

            print(e)


if __name__ == "__main__":
    main()