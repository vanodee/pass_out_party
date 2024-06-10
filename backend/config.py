from os import getenv
from flask import Flask, session, jsonify
from flask_babel import Babel
from flask_cors import CORS
from flask_mailman import Mail
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect, generate_csrf
import logging

user = 'pass_out'
password = 'passout123$'
host = 'localhost'
database = 'passout'

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'e0c8a8d0c45bc7449510756f51d96568'
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqldb://{user}:{password}@{host}/{database}'
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'frankenstein9585@gmail.com'
app.config['MAIL_PASSWORD'] = 'wyeiadpqhbyruxjx'

db = SQLAlchemy(app)
# csrf = CSRFProtect(app)

babel = Babel(app)
mail = Mail()
mail.init_app(app)
logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)


# @app.route('/token')
# def token():
#     csrf_token = generate_csrf()
#     session['csrf_token'] = csrf_token
#     session.modified = True
#     return jsonify({'X-CSRFToken': csrf_token})


from backend.routes import register, guest_info, send_mail
