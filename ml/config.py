"""
config.py

Global configuration for SportScout ML pipeline.
"""

from pathlib import Path

# --------------------------------------------------
# Project Paths
# --------------------------------------------------

PROJECT_ROOT = Path(__file__).resolve().parent.parent

DATASET_DIR = PROJECT_ROOT / "datasets"

MODEL_DIR = PROJECT_ROOT / "ml" / "models"

WEIGHTS_DIR = MODEL_DIR / "weights"

# --------------------------------------------------
# Video Configuration
# --------------------------------------------------

SUPPORTED_VIDEO_FORMATS = [
    ".mp4",
    ".avi",
    ".mov",
]

FRAME_WIDTH = 1280

FRAME_HEIGHT = 720

# --------------------------------------------------
# Badminton Classes
# --------------------------------------------------

PLAYER_CLASS = 0

RACKET_CLASS = 1

SHUTTLECOCK_CLASS = 2

CLASS_NAMES = {
    PLAYER_CLASS: "player",
    RACKET_CLASS: "racket",
    SHUTTLECOCK_CLASS: "shuttlecock",
}

# --------------------------------------------------
# Evaluation
# --------------------------------------------------

MAX_SCORE = 100

# --------------------------------------------------
# Project
# --------------------------------------------------

SPORT = "badminton"

VERSION = "1.0.0"