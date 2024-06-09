import requests
from os import getenv
api_key = getenv("ELASTIC_EMAIL")
url = "https://api.elasticemail.com/v2/email/send"

payload = {
    "apikey": '87D433BB18454A06710AE592260887517D565AA218D3147B42BDB43610BD66D71D14581AA3EE2D3A91A9F6E84741AA9E',
    "from": "donny9585@gmail.com",
    "to": "frankenstein9585@gmail.com",
    "subject": "Test Email",
    "body": "This is a test email.",
}


response = requests.post(url, data=payload)

if response.status_code == 200:
    print(response.json())
else:
    print("Failed to send email.")