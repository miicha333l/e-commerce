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
  
  return (
    <div className="container">
      <h1>Bienvenue sur notre boutique en ligne</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}€</p>
            <button>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
