import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent.parent))

from ml.pipeline import run_pipeline

result = run_pipeline("datasets/badminton/test.mp4")

print(result)