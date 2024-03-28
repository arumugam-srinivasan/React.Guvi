// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
  const fetchItems = async () => {
    try {
      const response = await fetch('https://api.jsonbin.io/b/60dd7e36e07f8b5ea297f303');
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

 
  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, fetchItems, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
