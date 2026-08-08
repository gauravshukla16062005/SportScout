"""
server.py

Main Flask application.
"""

from flask import Flask

from backend.app.routes.analysis_routes import (
    analysis_bp
)

app = Flask(__name__)

app.register_blueprint(
    analysis_bp,
    url_prefix="/api"
)

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )