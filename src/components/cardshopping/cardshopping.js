import React, { useState } from 'react';
import './cardshopping.css';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import White from "../../assets/whiteball.jpeg";
import Orange from "../../assets/orangeball.jpeg";

export default function CardShopping() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [White, Orange];

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <div>
      <div className="card">
        <div className="image-container">
          {images.map((image, index) => (
            <img
              src={image}
              alt="Product Image"
              className={index === activeImageIndex ? 'active' : ''}
              key={index}
            />
          ))}
        </div>
        <div className="pagination">
          {images.map((_, index) => (
            <span
              className={`dot ${index === activeImageIndex ? 'active' : ''}`}
              onClick={() => handleImageChange(index)}
              key={index}
            >
              {index === 0 ? 'White ball' : 'Orange ball'}
            </span>
          ))}
        </div>
        <div className="details">
          <span className="price">18$ / 6 ball</span>
          <button className="add-to-cart">
            <AddShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
