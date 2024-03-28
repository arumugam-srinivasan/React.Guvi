// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <CartPage />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
