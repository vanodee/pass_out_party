import qrcode.constants
from qrcode import QRCode


def generate_qrcode(guest):
    qr = QRCode(version=3, box_size=20, border=10, error_correction=qrcode.constants.ERROR_CORRECT_H)
    qr.add_data(f"https://deer-eternal-mongoose.ngrok-free.app/guest/{guest.id}")
    qr.make(fit=True)
    img = qr.make_image(fill_color='green', back_color='white')
    img.save(f'Pass_out_party_{guest.name.split()[0]}.png')
