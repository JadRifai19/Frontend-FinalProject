import React, { useState } from 'react';
import './cardshopping.css';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import OrangeBall from '../../assets/orangeball.webp';
import WhiteBall from '../../assets/whiteball.jpeg';

export default function CardShopping({ addToCart }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const ballProducts = [
    {
      productName: 'White Ball',
      image: WhiteBall,
      color: 'White'
    },
    {
      productName: 'Orange Ball',
      image: OrangeBall,
      color: 'Orange'
    }
  ];

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  const handleAddToCart = () => {
    const selectedProduct = {
      productName: ballProducts[activeImageIndex].productName,
      color: ballProducts[activeImageIndex].color,
      price: '18$'
    };
    addToCart(selectedProduct);
  };


  return (
    <div>
      <div className="card-shopping-card">
        <div className="image-container">
          {ballProducts.map((product, index) => (
            <img
              key={index}
              src={product.image}
              alt="Product Image"
              className={`image ${index === activeImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="pagination">
          {ballProducts.map((product, index) => (
            <span
              className={`dot ${index === activeImageIndex ? 'active' : ''}`}
              onClick={() => handleImageChange(index)}
              key={index}
            >
              {product.productName}
            </span>
          ))}
        </div>
        <div className="details">
          <span className="price">18$ / 6 ball</span>
          <button className="add-to-cart" onClick={() => handleAddToCart(ballProducts[activeImageIndex].color)}>
            <AddShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
