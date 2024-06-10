from flask import render_template, session
from flask_mailman import EmailMessage

from backend.config import app, mail


def send_html_email(subject, recipient, template, **kwargs):
    html_body = render_template(template, **kwargs)
    message = EmailMessage(
        subject=subject,
        body=html_body,
        from_email='frankenstein9585@gmail.com',
        to=[recipient]
    )
    message.content_subtype = 'html'
    print(type(mail))
    message.send()


@app.route('/send-mail', methods=['GET', 'POST'])
def send_mail():
    send_html_email('Registration Successful', 'donny9585@gmail.com', 'index.html', id=session['guest_id'])
    return 'HTML Email sent!'


