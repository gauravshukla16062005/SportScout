from pathlib import Path

from ml.preprocessing.video_loader import (
    load_video,
    release_video,
)

VIDEO_FOLDER = Path("datasets/badminton")


def main():

    videos = VIDEO_FOLDER.glob("*.mp4")

    for video in videos:

        print(f"\nTesting: {video.name}")

        try:

            cap = load_video(str(video))

            print("Video loaded successfully.")

            release_video(cap)

            print("Video released.")

        except Exception as e:

            print(e)


if __name__ == "__main__":

    main()