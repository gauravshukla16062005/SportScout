"""
response_formatter.py

Formats ML pipeline outputs for API responses.
"""


def format_analysis_response(
    metadata,
    features,
    evaluation,
    recommendation
):
    """
    Create standard API response.
    """

    return {
        "metadata": metadata,
        "features": features,
        "evaluation": evaluation,
        "recommendation": recommendation
    }


def format_success_response(
    message,
    data=None
):
    """
    Standard success response.
    """

    return {
        "success": True,
        "message": message,
        "data": data
    }


def format_error_response(
    message
):
    """
    Standard error response.
    """

    return {
        "success": False,
        "message": message
    }