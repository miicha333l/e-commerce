// src/components/Header.js

import React from 'react';
import '../components/Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header style={{ background: '#222', color: '#fff', padding: '10px 0', boxShadow: '0 2px 8px #eee' }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem', letterSpacing: 1 }}>E-Commerce</span>
        </div>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 15px' }}><Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Accueil</Link></li>
          <li style={{ margin: '0 15px' }}><Link to="/products" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Produits</Link></li>
          <li style={{ margin: '0 15px' }}><Link to="/cart" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Panier</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
