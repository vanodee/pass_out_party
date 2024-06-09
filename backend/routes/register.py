from backend.config import app, db
from flask import request, jsonify
from backend.models.guest import Guest


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        guest_dict = request.get_json()
        # guest_dict.pop('csrf_token', None)
        print(guest_dict)
        guest = Guest(**guest_dict)
        guest.save()
        return jsonify({'message': 'Done'}), 201
