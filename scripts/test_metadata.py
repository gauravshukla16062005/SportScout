from pathlib import Path

from ml.preprocessing.video_loader import (
    load_video,
    release_video
)

from ml.preprocessing.metadata import (
    extract_metadata
)


VIDEO_FOLDER = Path("datasets/badminton")


def main():

    videos = VIDEO_FOLDER.glob("*.mp4")

    for video in videos:

        print("=" * 50)

        print(video.name)

        try:

            cap = load_video(str(video))

            metadata = extract_metadata(cap, str(video))

            for key, value in metadata.items():

                print(f"{key:15}: {value}")

            release_video(cap)

        except Exception as e:

            print(e)


if __name__ == "__main__":

    main()