from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Product

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///catalog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)
db.init_app(app)


with app.app_context():
    db.create_all()

@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.order_by(Product.created_at.desc()).all()
    return jsonify([p.to_dict() for p in products])

@app.route('/api/products', methods=['POST'])
def add_product():
    data = request.json
    new_item = Product(
        title=data['title'],
        category=data['category'],
        price=float(data['price']),
        image_url=data['imageUrl'],
        description=data.get('description', '')
    )
    db.session.add(new_item)
    db.session.commit()
    return jsonify(new_item.to_dict()), 201

if __name__ == '__main__':
    app.run(port=5000, debug=True)