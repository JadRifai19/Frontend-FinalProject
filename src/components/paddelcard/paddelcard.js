import React, { useState } from 'react';
import './paddelcard.css';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BlackPaddle from '../../assets/blackpaddel.webp';
import RedPaddle from '../../assets/redpaddel.webp';
import GreenPaddle from '../../assets/greenpaddel.webp';
import BluePaddle from '../../assets/bluepaddel.webp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function PaddlecardShopping({ addToCart }) {
  const [activeImage, setActiveImage] = useState(BlackPaddle);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedPrice, setSelectedPrice] = useState(120);
  const [selectedname, setSelectedName] = useState('Black Paddle');

  const handleImageChange = (image, color, price, name) => {
    setActiveImage(image);
    setSelectedColor(color);
    setSelectedPrice(price);
    setSelectedName(name);
  };

  const handleAddToCart = () => {
    const selectedProduct = {
      productName: selectedname,
      price: `${selectedPrice}$`
    };
    addToCart(selectedProduct);
  };

  return (
    <div>
      <div className="tablecard-paddel">
        <div className="image-container-table-paddel">
          <img src={activeImage} alt="Product Image" />
          <img className="image-slide-paddel" src={BlackPaddle} alt="Black Paddle" />
          <img className="image-slide-paddel" src={RedPaddle} alt="Red Paddle" />
          <img className="image-slide-paddel" src={GreenPaddle} alt="Purple Paddle" />
          <img className="image-slide-paddel" src={BluePaddle} alt="Blue Paddle" />
        </div>
        <div className="details-table-paddel">
          <div>
            <button
              className={`switch-paddle-button ${selectedname === 'Black Paddle' ? 'active' : ''}`}
              onClick={() => handleImageChange(BlackPaddle, 'black', 120, 'Black Paddle')}
            >
              <FiberManualRecordIcon style={{ color: "black", fontSize: "18px" }} />
            </button>
            <button
              className={`switch-paddle-button ${selectedColor === 'red' ? 'active' : ''}`}
              onClick={() => handleImageChange(RedPaddle, 'red', 120, 'Red Paddle')}
            >
              <FiberManualRecordIcon style={{ color: "red", fontSize: "18px" }} />
            </button>
            <button
              className={`switch-paddle-button ${selectedColor === 'green' ? 'active' : ''}`}
              onClick={() => handleImageChange(GreenPaddle, 'green', 110, 'Green Paddle')}
            >
              <FiberManualRecordIcon style={{ color: "rgb(12, 223, 12)", fontSize: "18px" }} />
            </button>
            <button
              className={`switch-paddle-button ${selectedColor === 'blue' ? 'active' : ''}`}
              onClick={() => handleImageChange(BluePaddle, 'blue', 115, 'Blue Paddle')}
            >
              <FiberManualRecordIcon style={{ color: "blue", fontSize: "18px" }} />
            </button>
            <span className="price-table">{selectedPrice}$</span>
          </div>
          <button className="add-to-cart-table" onClick={handleAddToCart}>
            <AddShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
