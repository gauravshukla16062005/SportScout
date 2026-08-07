"""
test_all.py - Automated Testing on Multiple Images & Videos
Run this to test RTMPose on all files in test_data/
"""

import os
import json
import time
from pathlib import Path
from datetime import datetime
from rtmpose_model import RTMPoseModel
from pose_inference import PoseInference

def test_image(image_path, infer):
    """Test on a single image"""
    print(f"📸 Testing image: {image_path.name}")
    
    try:
        keypoints, scores = infer.process_image(str(image_path))
        if keypoints is not None and len(keypoints) > 0:
            return {
                "status": "PASS",
                "keypoints": len(keypoints[0]),
                "confidence": round(float(scores[0].mean()), 3)
            }
        else:
            return {"status": "FAIL", "reason": "No keypoints detected"}
    except Exception as e:
        return {"status": "ERROR", "reason": str(e)}

def test_video(video_path, infer):
    """Test on a single video"""
    print(f"🎬 Testing video: {video_path.name}")
    
    try:
        result = infer.process_video(str(video_path))
        if result and len(result) > 0:
            return {
                "status": "PASS",
                "frames": len(result),
                "keypoints_per_frame": 133
            }
        else:
            return {"status": "FAIL", "reason": "No frames processed"}
    except Exception as e:
        return {"status": "ERROR", "reason": str(e)}

def main():
    print("=" * 60)
    print("🏸 RTMPose Automated Testing")
    print("=" * 60)
    
    # Load model once (reuse for all tests)
    print("\n🔄 Loading RTMPose model...")
    model = RTMPoseModel(mode='balanced')
    pose_model = model.load()
    infer = PoseInference(pose_model)
    print("✅ Model loaded!")
    
    results = {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "images": [],
        "videos": [],
        "summary": {}
    }
    
    # Test Images
    image_dir = Path(__file__).parent / "test_data" / "images"
    if image_dir.exists():
        image_files = list(image_dir.glob("*.jpg")) + list(image_dir.glob("*.png"))
        print(f"\n📸 Found {len(image_files)} images to test")
        
        for img in image_files:
            result = test_image(img, infer)
            results["images"].append({
                "name": img.name,
                "result": result
            })
            print(f"   Status: {result['status']}")
    
    # Test Videos
    video_dir = Path(__file__).parent / "test_data" / "videos"
    if video_dir.exists():
        video_files = list(video_dir.glob("*.mp4")) + list(video_dir.glob("*.mkv"))
        print(f"\n🎬 Found {len(video_files)} videos to test")
        
        for vid in video_files:
            result = test_video(vid, infer)
            results["videos"].append({
                "name": vid.name,
                "result": result
            })
            print(f"   Status: {result['status']}")
    
    # Summary
    total_images = len(results["images"])
    total_videos = len(results["videos"])
    passed_images = sum(1 for i in results["images"] if i["result"]["status"] == "PASS")
    passed_videos = sum(1 for v in results["videos"] if v["result"]["status"] == "PASS")
    
    results["summary"] = {
        "total_images": total_images,
        "passed_images": passed_images,
        "failed_images": total_images - passed_images,
        "total_videos": total_videos,
        "passed_videos": passed_videos,
        "failed_videos": total_videos - passed_videos
    }
    
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    print(f"📸 Images: {passed_images}/{total_images} PASSED")
    print(f"🎬 Videos: {passed_videos}/{total_videos} PASSED")
    
    # Save results
    results_dir = Path(__file__).parent / "test_results"
    results_dir.mkdir(exist_ok=True)
    results_path = results_dir / f"test_results_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    
    with open(results_path, 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\n📁 Results saved to: {results_path}")
    print("=" * 60)

if __name__ == "__main__":
    main()