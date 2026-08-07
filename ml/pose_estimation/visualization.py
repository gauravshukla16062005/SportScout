"""
Visualization Module
"""
import cv2
import numpy as np
from rtmlib import draw_skeleton

class Visualizer:
    @staticmethod
    def draw_pose(frame, keypoints, scores, threshold=0.5):
        """Draw pose skeleton"""
        if keypoints is None or len(keypoints) == 0:
            return frame
        return draw_skeleton(frame, keypoints, scores, kpt_thr=threshold)
    
    @staticmethod
    def draw_keypoints(frame, keypoints, scores, threshold=0.5):
        """Draw individual keypoints"""
        if keypoints is None:
            return frame
        
        for kp, score in zip(keypoints[0], scores[0]):
            if score > threshold:
                x, y = int(kp[0]), int(kp[1])
                cv2.circle(frame, (x, y), 3, (0, 255, 0), -1)
        return frame
    
    @staticmethod
    def draw_angles(frame, points, angles):
        """Draw angle annotations on frame"""
        for (p1, p2, p3), angle in zip(points, angles):
            cv2.line(frame, tuple(p1), tuple(p2), (255, 0, 0), 2)
            cv2.line(frame, tuple(p2), tuple(p3), (255, 0, 0), 2)
            cv2.putText(frame, f"{angle:.1f}°", tuple(p2), 
                       cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        return frame