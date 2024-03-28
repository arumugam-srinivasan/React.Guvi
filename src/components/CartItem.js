// CartItem.js
import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>Increase</button>
      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>Decrease</button>
    </div>
  );
};

export default CartItem;
