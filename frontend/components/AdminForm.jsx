import React, { useState } from 'react';

export default function AdminForm({ onProductAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Jackets',
    price: '',
    imageUrl: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Product added!');
        setFormData({ title: '', category: 'Jackets', price: '', imageUrl: '', description: '' });
        onProductAdded();
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Add New Item</h3>
      <div style={{ marginBottom: '1rem' }}>
        <label>Title</label>
        <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} style={{ width: '100%', padding: '8px', marginTop: '4px' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Category</label>
        <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} style={{ width: '100%', padding: '8px', marginTop: '4px' }}>
          <option value="Jackets">Jackets</option>
          <option value="Shirts">Shirts</option>
          <option value="Pants">Pants</option>
        </select>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Price ($)</label>
        <input type="number" step="0.01" required value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} style={{ width: '100%', padding: '8px', marginTop: '4px' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Image URL</label>
        <input type="url" required value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} style={{ width: '100%', padding: '8px', marginTop: '4px' }} />
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
    </form>
  );
}