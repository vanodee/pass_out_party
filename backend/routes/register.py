from backend.config import app
from flask import request, jsonify, session
from backend.models.guest import Guest
from backend.generate_qrcode import generate_qrcode


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        guest_json = request.get_json()
        session['form_data'] = guest_json
        # paystack_amount = 5000 if guest_json['gender'] == 'Male' else 2000
        # paystack_email = guest_json['email']
        # paystack_response = paystack.make_payment(paystack_amount, paystack_email)
        print(guest_json)
        # return paystack_response['data']['authorization_url']
        # guest_dict.pop('csrf_token', None)
        guest = Guest(**guest_json)
        guest.save()
        generate_qrcode(guest)
        return jsonify({'message': 'Done'}), 201
