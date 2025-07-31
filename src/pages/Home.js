// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';
import getProducts from '../services/productData'; 
const Home = () => {
  const [products, setProducts] = useState([]);

  // Récupérer les produits depuis l'API (ou fichier)
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  
  // Génération automatique de 50 produits
  const generatedProducts = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Produit ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 10,
    description: `Description du produit ${i + 1}`,
    image: `https://picsum.photos/seed/${i + 1}/220/220`
  }));
  
  return (
    <div className="container" style={{ background: 'linear-gradient(135deg, #f7f7f7 60%, #ffe0b2 100%)', minHeight: '100vh', paddingBottom: 40 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30, fontWeight: 'bold', color: '#ff6600', letterSpacing: 1 }}>Bienvenue sur notre boutique !</h1>
      <div className="product-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28, maxWidth: 1300, margin: '0 auto' }}>
        {generatedProducts.map(product => (
          <div className="product-card" key={product.id} style={{ boxShadow: '0 4px 16px #e0e0e0', borderRadius: 16, padding: 18, background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer', border: '1px solid #ffe0b2' }}>
            <img src={product.image} alt={product.name} style={{ width: 180, height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 14, boxShadow: '0 2px 8px #eee' }} />
            <h2 style={{ margin: '10px 0 5px', fontSize: '1.2rem', color: '#222', fontWeight: 600 }}>{product.name}</h2>
            <p style={{ color: '#888', marginBottom: 10, fontSize: '0.95rem', textAlign: 'center' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.15rem', marginBottom: 12, color: '#ff6600' }}>{product.price} €</p>
            <button style={{ background: 'linear-gradient(90deg, #ff6600 60%, #ffa726 100%)', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: '1rem', boxShadow: '0 2px 8px #ffe0b2', transition: 'background 0.2s' }}>
              Voir le produit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
