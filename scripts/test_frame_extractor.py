from pathlib import Path

from ml.preprocessing.video_loader import (
    load_video,
    release_video
)

from ml.preprocessing.frame_extractor import (
    extract_frames
)

VIDEO_FOLDER = Path("datasets/badminton")


def main():

    videos = VIDEO_FOLDER.glob("*.mp4")

    for video in videos:

        print("=" * 60)

        print(video.name)

        try:

            cap = load_video(str(video))

            frames = extract_frames(cap)

            print(f"Frames Extracted : {len(frames)}")

            if len(frames) > 0:

                print("First Frame Shape :", frames[0].shape)

            release_video(cap)

        except Exception as e:

            print(e)


if __name__ == "__main__":
    main()