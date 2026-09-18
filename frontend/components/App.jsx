import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AdminForm from './components/AdminForm';

export default function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('catalog');

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error connecting to Flask API:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Navbar currentView={view} setView={setView} />
      <main style={{ padding: '2rem' }}>
        {view === 'admin' ? (
          <AdminForm onProductAdded={fetchProducts} />
        ) : (
          <div>
            <h2>Product Catalog</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
              {products.map((item) => (
                <div key={item.id} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ padding: '1rem' }}>
                    <small style={{ textTransform: 'uppercase', color: '#2563eb', fontWeight: 'bold' }}>{item.category}</small>
                    <h3 style={{ margin: '0.5rem 0' }}>{item.title}</h3>
                    <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}