from pathlib import Path

from ml.preprocessing.preprocess import preprocess_video

VIDEO_FOLDER = Path("datasets/badminton")


def main():
    for video in VIDEO_FOLDER.glob("*.mp4"):

        print("=" * 70)
        print(video.name)

        try:
            data = preprocess_video(str(video))

            print("\nMetadata\n")

            for key, value in data["metadata"].items():
                print(f"{key:<15}: {value}")

            print()

            print(f"Total Frames : {len(data['frames'])}")
            print(f"Frame Shape  : {data['frames'][0].shape}")

        except Exception as e:
            print(e)


if __name__ == "__main__":
    main()