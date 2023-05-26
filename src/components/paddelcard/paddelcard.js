import React, { useState } from 'react';
import './paddelcard.css';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BlackPaddle from '../../assets/blackpaddel.webp';
import RedPaddle from '../../assets/redpaddel.webp';
import GreenPaddle from '../../assets/greenpaddel.webp';
import BluePaddle from '../../assets/bluepaddel.webp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export default function TablecardShopping() {
    const [activeImage, setActiveImage] = useState(BlackPaddle);
    
    const handleImageChange = (image) => {
      setActiveImage(image);
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
                className="switch-paddle-button"
                onClick={() => handleImageChange(BlackPaddle)}
              >
                <FiberManualRecordIcon style={{ color: "black", fontSize: "18px" }} />
              </button>
              <button
                className="switch-paddle-button"
                onClick={() => handleImageChange(RedPaddle)}
              >
                <FiberManualRecordIcon style={{ color: "red" ,fontSize: "18px"  }} />
              </button>
              <button
                className="switch-paddle-button"
                onClick={() => handleImageChange(GreenPaddle)}
              >
                <FiberManualRecordIcon style={{ color: "rgb(12, 223, 12)" ,fontSize: "18px" }} />
              </button>
              <button
                className="switch-paddle-button"
                onClick={() => handleImageChange(BluePaddle)}
              >
                <FiberManualRecordIcon style={{ color: "blue",fontSize: "18px"  }} />
              </button>
            <span className="price-table">120$</span>
            </div>
            <button className="add-to-cart-table">
              <AddShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }