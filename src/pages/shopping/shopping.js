import React, { useState } from 'react';import "./shopping.css";
import Image from '../../assets/ball.jpeg';
import Card from '../../components/cardshopping/cardshopping.js';
import TableCard from '../../components/tablecard/tablecard.js';
import PaddleCard from '../../components/paddelcard/paddelcard.js';
import './shopping.css';

const Shopping = () => {
  return (
    <div className="shopping">
      <div className="shopping__header">
        <img src={Image} alt="Product" className="shopping__header-image" />
      </div>
      <p className='title-homepage'> Take a look at the balls</p>
      <div className='cardshopping'>
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <p className='title-homepage'>Take a look at the tables</p>
        <div className='cardshopping'>
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
      </div>
      <p className='title-homepage'>Take a look at the paddles</p>
        <div className='cardshopping'>
        <PaddleCard />
        <PaddleCard />
        <PaddleCard />
        <PaddleCard />
      </div>
    </div>
  );
};

export default Shopping;
