import React, { useState, useEffect } from 'react';
import './tablecard.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';

export default function TablecardShopping({ productId, addToCart }) {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`https://pingpong-backend-6vtc.onrender.com/product/${productId}`);
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <div className="tablecard" key={productId}>
      <div className="image-container-table">
        <img
          className="image-product-table"
          src={`https://pingpong-backend-6vtc.onrender.com/${productData?.image}`}
          alt="Product Image"
        />
      </div>
      <div className="details-table">
        <p className="product-description">{productData?.description}</p>
        <h3 className="product-name">{productData?.productName}</h3>
        <span className="price-table">{productData?.price}</span>
        <button className="add-to-cart-table" onClick={() => addToCart(productData)}>
          <AddShoppingCartIcon />
        </button>
      </div>
    </div>
  );
}
