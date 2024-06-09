from backend.config import app
from backend.models import Guest


@app.route('/guest/<user_id>')
def view_guest(user_id):
    guest = Guest.find_obj_by(id=user_id)
    return guest.to_dict()
