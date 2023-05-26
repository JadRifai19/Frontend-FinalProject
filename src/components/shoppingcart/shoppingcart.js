import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>{item.price}</span>
              <button>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
