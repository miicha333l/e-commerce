import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Définit navigate
  // Exemple de produits simulés avec images
  const mockProducts = [
    {
      id: 1,
      name: 'Produit 1',
      price: 100,
      description: 'Description du produit 1',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Produit 2',
      price: 200,
      description: 'Description du produit 2',
      image: 'https://images.unsplash.com/photo-1526178613658-3f1622045544?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Produit 3',
      price: 150,
      description: 'Un produit innovant pour la maison.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Produit 4',
      price: 80,
      description: 'Accessoire tendance pour le quotidien.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Produit 5',
      price: 300,
      description: 'Produit haut de gamme pour les passionnés.',
      image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      name: 'Produit 6',
      price: 60,
      description: 'Petit gadget utile et malin.',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80'
    },
  ];

  useEffect(() => {
    const selectedProduct = mockProducts.find((p) => p.id === parseInt(productId, 10));
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) return <p>Produit non trouvé.</p>;

  // Ajout d'un état pour le panier (optionnel, ici juste une alerte)
  const handleAddToCart = () => {
    alert(`"${product.name}" ajouté au panier !`);
  };

  return (
    <div style={{ maxWidth: 500, margin: '30px auto', padding: 20, boxShadow: '0 2px 8px #eee', borderRadius: 10, background: '#fff' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>&larr; Retour</button>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 8, marginBottom: 20 }} />
      <h1 style={{ fontSize: '2rem', marginBottom: 10 }}>{product.name}</h1>
      <p style={{ color: '#555', marginBottom: 10 }}>{product.description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 20 }}>Prix : {product.price} €</p>
      <button onClick={handleAddToCart} style={{ background: '#ff6600', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 5, cursor: 'pointer' }}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductDetail;
