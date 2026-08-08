"""
main.py - Main Entry Point for Pose Estimation
Run this file to test pose estimation on images/videos
"""

import sys
from pathlib import Path

# Add parent directory (ml) to path so imports work
sys.path.insert(0, str(Path(__file__).parent.parent))

from pose_estimation import RTMPoseModel, PoseInference


def main():
    print("=" * 60)
    print("🏸 Badminton Pose Estimation - 133 Keypoints")
    print("=" * 60)

    # Load model
    model = RTMPoseModel(mode="balanced")
    pose_model = model.load()

    if pose_model is None:
        print("❌ Model failed to load. Exiting.")
        return

    infer = PoseInference(pose_model)

    # -----------------------------------------
    # IMAGE TEST
    # -----------------------------------------
    image_path = Path("datasets/badminton/test.jpg")

    if image_path.exists():
        print(f"\n📸 Processing image: {image_path}")

        keypoints, scores = infer.process_image(str(image_path))

        if keypoints is not None and len(keypoints) > 0:
            print(f"✅ Detected {len(keypoints[0])} keypoints")

    else:
        print("\n⚠️ No test image found (skipping image test)")

    # -----------------------------------------
    # VIDEO TEST
    # -----------------------------------------
    video_path = Path("datasets/badminton/test.mp4")

    if video_path.exists():
        print(f"\n🎬 Processing video: {video_path}")
        infer.process_video(str(video_path))
    else:
        print(f"\n❌ Video not found: {video_path}")

    print("\n" + "=" * 60)
    print("✅ Done!")
    print("=" * 60)


if __name__ == "__main__":
    main()