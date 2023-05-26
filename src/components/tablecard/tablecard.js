import React, { useState } from 'react';
import './tablecard.css';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShopPaddle from "../../assets/paddlehome.webp";
import ShopTable from "../../assets/tableshop.webp";
import ShopBall from "../../assets/ShopBall.webp";


export default function TablecardShopping() {
  return (
    <div>
      <div className="tablecard">
        <div className="image-container-table">
          
            <img
              src={ShopTable}
              alt="Product Image"
            />
            </div>
        <div className="details-table">
          <span className="price-table">900$ </span>
          <button className="add-to-cart-table">
            <AddShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
