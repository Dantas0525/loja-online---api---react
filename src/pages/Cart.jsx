import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, total } = useContext(CartContext);

  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity} x R$ {item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}
