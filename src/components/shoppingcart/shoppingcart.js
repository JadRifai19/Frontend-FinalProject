import React, { useState } from 'react';
import './shoppingcart.css';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const isCartEmpty = !cartItems || cartItems.length === 0;
  const [notification, setNotification] = useState('');

  const handleSave = () => {
    if (cartItems.length > 0) {
      setNotification('Products saved successfully.');
      setTimeout(() => {
        setNotification('');
        for (let i = cartItems.length - 1; i >= 0; i--) {
          removeFromCart(i);
        }
      }, 1000);
    }
  };
  

  return (
    <div className={`shopping-cart ${isCartEmpty ? 'hidden' : ''}`}>
      <h2>Shopping Cart</h2>
      {isCartEmpty ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span className="product-name-shopping-cart">{item.productName}</span>
              <span className="product-price-shopping-cart">{item.price}</span>
              <button onClick={() => removeFromCart(index)} className="remove-from-shopping-cart">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleSave} className="save-from-shopping-cart">
        Save
      </button>
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
};

export default ShoppingCart;
