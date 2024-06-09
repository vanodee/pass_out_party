import requests

test_key = 'sk_test_13c67d975b0bf025b13788c2badb4c67ddd3588a'


def make_payment(amount, email):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {test_key}'
    }

    data = {
        'amount': amount,
        'email': email
    }

    response = requests.post('https://api.paystack.co/transaction/initialize', headers=headers, json=data)

    return response.json()


def verify_payment(reference):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {test_key}'
    }

    response = requests.get(f'https://api.paystack.co/transaction/verify/{reference}', headers=headers)

    return response.json()
