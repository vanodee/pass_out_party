from backend.models.base_model import BaseModel, db


class Guest(BaseModel, db.Model):
    """Guest's Table"""
    __tablename__ = 'guests'
    name = db.Column(db.String(126), nullable=False)
    email = db.Column(db.String(126), nullable=False)
    gender = db.Column(db.String(10), nullable=False)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
