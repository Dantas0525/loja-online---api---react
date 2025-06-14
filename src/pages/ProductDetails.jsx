import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/api';
import { CartContext } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProduct(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <img src={product.image} alt={product.name} width={300} />
      <h2>{product.name}</h2>
      <p>R$ {product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
}
