"""
main.py - Main Entry Point for Pose Estimation
Run this file to test pose estimation on images/videos
"""
import os
import sys
from pathlib import Path

# Add parent directory (ml) to path so imports work
sys.path.insert(0, str(Path(__file__).parent.parent))

from pose_estimation import RTMPoseModel, PoseInference, Visualizer, KeypointUtils

def main():
    print("=" * 60)
    print("🏸 Badminton Pose Estimation - 133 Keypoints")
    print("=" * 60)
    
    # Load model
    model = RTMPoseModel(mode='balanced')
    pose_model = model.load()
    
    if pose_model is None:
        print("❌ Model failed to load. Exiting.")
        return
    
    infer = PoseInference(pose_model)
    
    # ✅ CORRECT: Looking INSIDE pose_estimation folder
    image_path = Path(__file__).parent / "test_image.jpg"
    
    if image_path.exists():
        print(f"\n📸 Processing image: {image_path}")
        keypoints, scores = infer.process_image(str(image_path))
        
        if keypoints is not None and len(keypoints) > 0:
            print(f"   ✅ Detected {len(keypoints[0])} keypoints")
            
            # ✅ IMPROVED: Show first 10 high-confidence points
            print("\n🎯 Sample Keypoints (confidence > 0.7):")
            count = 0
            for i, (kp, score) in enumerate(zip(keypoints[0], scores[0])):
                if score > 0.7 and count < 10:
                    print(f"   Point {i}: x={int(kp[0])}, y={int(kp[1])}, conf={score:.2f}")
                    count += 1
            if len(keypoints[0]) > 10:
                print(f"   ... and {len(keypoints[0]) - count} more points in JSON!")
    else:
        print(f"\n⚠️ No test image found!")
        print(f"   📥 Add 'test_image.jpg' to: {Path(__file__).parent}")
    
    # ✅ CORRECT: Looking INSIDE pose_estimation folder for video
    video_path = Path(__file__).parent / "test_video.mp4"
    if video_path.exists():
        print(f"\n🎬 Processing video: {video_path}")
        infer.process_video(str(video_path))
    else:
        print(f"\n💡 To test on video, add 'test_video.mp4' to: {Path(__file__).parent}")
    
    print("\n" + "=" * 60)
    print("✅ Done! Check output files:")
    print(f"   📸 output_test_image.jpg - Annotated image (in {Path(__file__).parent})")
    print(f"   📊 pose_keypoints_*.json - ALL 133 keypoints (in {Path(__file__).parent})")
    print("=" * 60)

if __name__ == "__main__":
    main()