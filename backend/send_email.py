import ElasticEmail
from ElasticEmail.apis.tags import emails_api
from ElasticEmail.model.email_message_data import EmailMessageData
from ElasticEmail.model.email_recipient import EmailRecipient

configuration = ElasticEmail.Configuration()
configuration.api_key['apikey'] = '87D433BB18454A06710AE592260887517D565AA218D3147B42BDB43610BD66D71D14581AA3EE2D3A91A9F6E84741AA9E'

with ElasticEmail.ApiClient(configuration) as api_client:
    api_instance = emails_api.EmailsApi(api_client)
    email_message_data = EmailMessageData(
        recipients=[
            EmailRecipient(
                email="frankenstein9585@gmail.com"
            ),
        ],
        content={
            "Body": [
                {
                    "ContentType": "HTML",
                    "Content": "My test email content ;)"
                }
            ],
            "Subject": "Python EE lib test",
            "From": "donny9585@gmail.com"
        }
    )

    try:
        api_response = api_instance.emails_post(email_message_data)
        print(api_response)
    except ElasticEmail.ApiException as e:
        print("Exception when calling EmailsApi->emails_post: %s\n" % e)
