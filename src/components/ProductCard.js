// src/components/ProductCard.js
import React from 'react';
import './components/ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <Link to={`/product/${product.id}`}>Voir le produit</Link>
    </div>
  );
}

export default ProductCard;
