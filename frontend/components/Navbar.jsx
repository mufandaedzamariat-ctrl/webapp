import React from 'react';

export default function Navbar({ currentView, setView }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#1e293b', color: '#fff' }}>
      <h2 style={{ margin: 0 }}>Luxe Thread Co.</h2>
      <div>
        <button 
          onClick={() => setView('catalog')}
          style={{ marginRight: '10px', padding: '8px 16px', background: currentView === 'catalog' ? '#3b82f6' : '#334155', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Customer Catalog
        </button>
        <button 
          onClick={() => setView('admin')}
          style={{ padding: '8px 16px', background: currentView === 'admin' ? '#3b82f6' : '#334155', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Admin Panel
        </button>
      </div>
    </nav>
  );
}