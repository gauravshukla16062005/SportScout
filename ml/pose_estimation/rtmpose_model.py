"""
RTMPose Model Loader - Optimized
"""
import os
import rtmlib

class RTMPoseModel:
    def __init__(self, mode='balanced', backend='onnxruntime', device='cpu'):
        """
        mode: 'balanced', 'performance', 'lightweight'
        backend: 'onnxruntime' (CPU) or 'openvino' (faster on Intel)
        device: 'cpu' or 'cuda' (if GPU available)
        """
        self.mode = mode
        self.backend = backend
        self.device = device
        self.model = None
        
    def load(self):
        """Load RTMPose model with error handling"""
        try:
            print(f"🔄 Loading RTMPose model (mode={self.mode})...")
            from rtmlib import Wholebody
            
            self.model = Wholebody(
                mode=self.mode,
                backend=self.backend,
                device=self.device
            )
            print("✅ RTMPose model loaded successfully!")
            return self.model
            
        except Exception as e:
            print(f"❌ Failed to load model: {e}")
            print("💡 Try: pip install rtmlib onnx onnxruntime")
            return None