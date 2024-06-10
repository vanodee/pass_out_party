from backend import paystack
from backend.config import app
from flask import request, jsonify


@app.route('/verify')
def verify():
    query_params = request.args
    params_dict = query_params.to_dict()
    verification_status = paystack.verify_payment(params_dict['reference'])
    return jsonify(verification_status)
