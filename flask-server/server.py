from flask_cors import CORS
from flask import Flask
from flask import request, jsonify
from models.opening import Opening
from models.candidate import Candidate

app = Flask(__name__)
CORS(app)

@app.route("/openings", methods = ['GET'])  # GET request to collect all instances of job openings
def openings():
    return Opening.get_all()

@app.route("/add", methods = ["POST"])  # POST request to add candidate's input from application to DB
def add_candidate():
    print(request.is_json)
    content = request.get_json()  # declare content variable and turn data into JSON
    print(content)
    data = {
        "first_name": content['first_name'],
        "last_name": content['last_name'],
        "email": content['email'],
        "opening_id": content['opening_id']
    }
    try:
        Candidate.save(data)
        return "Candidate submitted successfully...", 200
    except:
        return "Bad request", 400



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)