import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
      <img src={product.image} alt={product.name} width={200} />
      <h2>{product.name}</h2>
      <p>R$ {product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`}>Ver Detalhes</Link>
      <br />
      <button onClick={() => addToCart(product)}>+ Carrinho</button>
    </div>
  );
}
