// CartPage.js
import React, { useEffect } from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './cartpage.css'

const CartPage = () => {
  const { cartItems, fetchItems } = useCart();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <CartSummary />
    </div>
  );
};

export default CartPage;
