"""
Pose Inference Module - Fixed with JSON Saving for Images
"""
import cv2
import json
import os
import datetime
from pathlib import Path
from rtmlib import draw_skeleton

class PoseInference:
    # Constants at top - easy to change
    CONFIDENCE_THRESHOLD = 0.5
    PROGRESS_INTERVAL = 50  # Show progress every 50 frames
    
    def __init__(self, model):
        self.model = model
        self.frames_processed = 0
        
    def extract_keypoints(self, frame):
        """Extract 133 keypoints with error handling"""
        if frame is None:
            return None, None
            
        try:
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            keypoints, scores = self.model(rgb_frame)
            self.frames_processed += 1
            return keypoints, scores
        except Exception as e:
            print(f"⚠️ Error processing frame: {e}")
            return None, None
    
    def process_image(self, image_path, output_path=None, save_json=True):
        """Process a single image and save keypoints to JSON"""
        # Validate input
        if not os.path.exists(image_path):
            print(f"❌ Image not found: {image_path}")
            return None, None
        
        # ✅ FIX: Get the folder where the image lives
        image_dir = Path(image_path).parent
        
        # Set default output path (save in same folder as image)
        if output_path is None:
            output_path = str(image_dir / f"output_{Path(image_path).stem}.jpg")
        
        frame = cv2.imread(image_path)
        if frame is None:
            print(f"❌ Could not load: {image_path}")
            return None, None
        
        print(f"📸 Processing: {image_path}")
        keypoints, scores = self.extract_keypoints(frame)
        
        if keypoints is None or len(keypoints) == 0:
            print("⚠️ No person detected in image")
            return None, None
        
        # Draw and save annotated image
        annotated = draw_skeleton(frame, keypoints, scores, 
                                 kpt_thr=self.CONFIDENCE_THRESHOLD)
        cv2.imwrite(output_path, annotated)
        print(f"✅ Saved image: {output_path}")
        print(f"🎯 Found {len(keypoints[0])} keypoints")
        
        # ✅ FIX: Save keypoints in the SAME folder as the image
        if save_json:
            timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
            json_path = str(image_dir / f"pose_keypoints_{timestamp}.json")
            
            # Convert numpy arrays to lists for JSON
            data = {
                "image": str(image_path),
                "timestamp": timestamp,
                "num_keypoints": len(keypoints[0]),
                "keypoints": keypoints[0].tolist() if keypoints is not None else None,
                "scores": scores[0].tolist() if scores is not None else None
            }
            
            with open(json_path, 'w') as f:
                json.dump(data, f, indent=2)
            print(f"✅ Saved keypoints: {json_path}")
        
        return keypoints, scores
    
    def process_video(self, video_path, output_json='pose_keypoints.json'):
        """Process video with progress tracking"""
        if not os.path.exists(video_path):
            print(f"❌ Video not found: {video_path}")
            return None
        
        # ✅ FIX: Get the folder where the video lives
        video_dir = Path(video_path).parent
        
        cap = cv2.VideoCapture(video_path)
        if not cap.isOpened():
            print(f"❌ Could not open: {video_path}")
            return None
        
        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        fps = int(cap.get(cv2.CAP_PROP_FPS))
        
        print(f"🎬 Processing: {video_path}")
        print(f"   📊 FPS: {fps}, Total frames: {total_frames}")
        
        all_keypoints = []
        frame_count = 0
        
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            
            frame_count += 1
            keypoints, scores = self.extract_keypoints(frame)
            
            all_keypoints.append({
                "frame": frame_count,
                "timestamp": frame_count / fps,
                "keypoints": keypoints.tolist() if keypoints is not None else None,
                "scores": scores.tolist() if scores is not None else None
            })
            
            # Show progress
            if frame_count % self.PROGRESS_INTERVAL == 0:
                progress = (frame_count / total_frames) * 100
                print(f"   ⏳ {frame_count}/{total_frames} frames ({progress:.1f}%)")
        
        cap.release()
        
        # ✅ FIX: Save JSON in the SAME folder as the video
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        output_json = str(video_dir / f"pose_keypoints_{timestamp}.json")
        
        with open(output_json, 'w') as f:
            json.dump(all_keypoints, f, indent=2)
        
        print(f"✅ Processed {frame_count} frames")
        print(f"📁 Saved: {output_json}")
        return all_keypoints