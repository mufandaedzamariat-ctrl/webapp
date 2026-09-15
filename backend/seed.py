from app import app
from models import db, Product

sample_clothes = [
    {
        "title": "Classic Denim Jacket",
        "category": "Jackets",
        "price": 89.99,
        "image_url": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=800",
        "description": "Timeless blue denim jacket with custom brass buttons."
    },
    {
        "title": "Linen Summer Shirt",
        "category": "Shirts",
        "price": 45.00,
        "image_url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
        "description": "Breathable white linen shirt perfect for warm weather."
    },
    {
        "title": "Tailored Chino Pants",
        "category": "Pants",
        "price": 65.50,
        "image_url": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
        "description": "Slim-fit khaki chinos suitable for casual and semi-formal wear."
    }
]

with app.app_context():
    # Clear existing data to prevent duplicates
    db.drop_all()
    db.create_all()

    # Add items to database
    for item in sample_clothes:
        product = Product(
            title=item["title"],
            category=item["category"],
            price=item["price"],
            image_url=item["image_url"],
            description=item["description"]
        )
        db.session.add(product)

    db.session.commit()
    print("Database seeded successfully with sample clothing items!")