import React, { useState } from 'react';
import "./shopping.css";
import Image from '../../assets/ShopBall.webp';
import Card from '../../components/cardshopping/cardshopping.js';
import TableCard from '../../components/tablecard/tablecard.js';
import PaddleCard from '../../components/paddelcard/paddelcard.js';
import ShoppingCart from '../../components/shoppingcart/shoppingcart.js';
import './shopping.css';

const Shopping = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="shopping">
      <div className="shopping__header">
        <img src={Image} alt="Product" className="shopping__header-image" />
      </div>
      <p className='title-homepage'>Take a look at the balls</p>
      <div className='cardshopping'>
        <Card addToCart={addToCart} />
        <Card addToCart={addToCart} />
        <Card addToCart={addToCart} />
        <Card addToCart={addToCart} />
      </div>
      <p className='title-homepage'>Take a look at the tables</p>
      <div className='cardshopping'>
        <TableCard addToCart={addToCart} />
        <TableCard addToCart={addToCart} />
        <TableCard addToCart={addToCart} />
        <TableCard addToCart={addToCart} />
      </div>
      <p className='title-homepage'>Take a look at the paddles</p>
      <div className='cardshopping'>
        <PaddleCard addToCart={addToCart} />
        <PaddleCard addToCart={addToCart} />
        <PaddleCard addToCart={addToCart} />
        <PaddleCard addToCart={addToCart} />
      </div>
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default Shopping;
