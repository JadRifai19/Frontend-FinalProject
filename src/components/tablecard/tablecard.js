import React, { useState } from 'react';
import './tablecard.css';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Table from '../../assets/tablett.jpeg';


export default function TablecardShopping() {
  return (
    <div>
      <div className="tablecard">
        <div className="image-container-table">
          
            <img
              src={Table}
              alt="Product Image"
            />
            </div>
        <div className="details-table">
          <span className="price-table">700$ </span>
          <button className="add-to-cart-table">
            <AddShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
