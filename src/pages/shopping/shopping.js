import React, { useState } from 'react';import "./shopping.css";
import Image from '../../assets/ball.jpeg';
import Card from '../../components/cardshopping/cardshopping.js';
import TableCard from '../../components/tablecard/tablecard.js';
import './shopping.css';

const Shopping = () => {
  return (
    <div className="shopping">
      <div className="shopping__header">
        <img src={Image} alt="Product" className="shopping__header-image" />
      </div>
      <div className='cardshopping'>
      {/* <p className='title-card-shop'> Take a look at the balls</p> */}
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <p className='title-card-shop'>Take a look at the tables</p> */}
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
      </div>
    </div>
  );
};

export default Shopping;
