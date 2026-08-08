class SportScoutError(Exception):
    """Base exception."""
    pass


class InvalidVideoError(SportScoutError):
    pass


class VideoProcessingError(SportScoutError):
    pass


class TrackingError(SportScoutError):
    pass


class PoseEstimationError(SportScoutError):
    pass


class EvaluationError(SportScoutError):
    pass