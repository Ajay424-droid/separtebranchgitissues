from flask import Flask, request, jsonify

app = Flask(__name__)

# Home API (GET)
@app.route("/", methods=["GET"])
def home():
    return "Hello, this is Python Backend!"

# About API (GET)
@app.route("/about", methods=["GET"])
def about():
    return jsonify({
        "project": "Simple Flask Backend",
        "status": "Running"
    })

# Data API (POST)
@app.route("/data", methods=["POST"])
def get_data():
    data = request.json
    name = data.get("name")
    return jsonify({
        "message": f"Hello {name}, data received successfully"
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
