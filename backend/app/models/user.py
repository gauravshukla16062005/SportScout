"""
user.py

User model for SportScout.
"""

from datetime import datetime


class User:
    """
    Represents a SportScout user.
    """

    def __init__(
        self,
        user_id: str,
        name: str,
        email: str,
        role: str = "player"
    ):
        self.user_id = user_id
        self.name = name
        self.email = email
        self.role = role
        self.created_at = datetime.utcnow()

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "name": self.name,
            "email": self.email,
            "role": self.role,
            "created_at": self.created_at.isoformat()
        }