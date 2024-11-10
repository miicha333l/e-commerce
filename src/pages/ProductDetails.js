import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Définit navigate
  // Exemple de produits simulés
  const mockProducts = [
    { id: 1, name: 'Produit 1', price: 100, description: 'Description du produit 1' },
    { id: 2, name: 'Produit 2', price: 200, description: 'Description du produit 2' },
    // Ajoutez plus de produits ici
  ];

  useEffect(() => {
    const selectedProduct = mockProducts.find((p) => p.id === parseInt(productId, 10));
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) return <p>Produit non trouvé.</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Retour</button>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Prix: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
