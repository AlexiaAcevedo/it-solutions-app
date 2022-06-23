from flask import jsonify
from mysqlconnection import connectToMySQL


class Opening:
    def __init__(self, data):
        self.id = data["id"]
        self.client = data["client"]
        self.poc = data["poc"]
        self.email = data["email"]
        self.role = data["role"]
        self.urgency = data["urgency"]
        self.quantity = data["quantity"]
        self.skills_needed = data["skills_needed"]


    @classmethod
    def get_all(cls): #gets all job openings from database
        query = 'SELECT * FROM openings;'
        results = connectToMySQL('data_piper').query_db(query)
        opening = [] #declare job opening list variable
        data = {} #declare data dictionary
        for result in results:  #loop through all results of opening instance in DB
            data = {           #declare key:value pairs
                'id': result['id'],
                'client': result['client'],
                'poc': result['poc'],
                'email': result['email'],
                'role': result['role'],
                'urgency': result['urgency'],
                'quantity': result['quantity'],
                'skills_needed': result['skills_needed']
            }
            opening.append(data)  # add dictionary to list for each instance of an opening
            data = {}   
        return jsonify(opening)   # send data as JSON














