"""
Keypoint Utilities - Optimized
"""
import numpy as np
from typing import List, Tuple

class KeypointUtils:
    EPSILON = 1e-8  # Avoid division by zero
    
    @staticmethod
    def get_angle(p1: Tuple, p2: Tuple, p3: Tuple) -> float:
        """Calculate angle in degrees between three points"""
        a = np.array(p1)
        b = np.array(p2)
        c = np.array(p3)
        
        ba = a - b
        bc = c - b
        
        # Avoid division by zero
        norm_ba = np.linalg.norm(ba)
        norm_bc = np.linalg.norm(bc)
        
        if norm_ba < KeypointUtils.EPSILON or norm_bc < KeypointUtils.EPSILON:
            return 0.0
        
        cosine_angle = np.dot(ba, bc) / (norm_ba * norm_bc)
        cosine_angle = np.clip(cosine_angle, -1.0, 1.0)
        angle = np.arccos(cosine_angle)
        
        return np.degrees(angle)
    
    @staticmethod
    def get_distance(p1: Tuple, p2: Tuple) -> float:
        """Calculate Euclidean distance between two points"""
        return np.linalg.norm(np.array(p1) - np.array(p2))
    
    @staticmethod
    def get_wrist_snap_velocity(wrist_positions: List[Tuple], times: List[float]) -> float:
        """Calculate wrist snap velocity (angular velocity)"""
        if len(wrist_positions) < 2:
            return 0.0
        
        # Use last two positions for velocity
        v1 = wrist_positions[-2]
        v2 = wrist_positions[-1]
        t1 = times[-2]
        t2 = times[-1]
        
        distance = KeypointUtils.get_distance(v1, v2)
        time_diff = t2 - t1
        
        return distance / time_diff if time_diff > 0 else 0.0
    
    @staticmethod
    def get_center_of_mass(hip_left: Tuple, hip_right: Tuple, 
                          shoulder_left: Tuple, shoulder_right: Tuple) -> Tuple:
        """Calculate approximate center of mass"""
        hip_center = np.mean([hip_left, hip_right], axis=0)
        shoulder_center = np.mean([shoulder_left, shoulder_right], axis=0)
        center = (hip_center + shoulder_center) / 2
        return tuple(center.astype(int))