import React from 'react';
import './shoppingcart.css';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const isCartEmpty = !cartItems || cartItems.length === 0;

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
    </div>
  );
};

export default ShoppingCart;
