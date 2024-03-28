// CartSummary.js
import React from 'react';
import { useCart } from './CartContext';

const CartSummary = () => {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default CartSummary;
