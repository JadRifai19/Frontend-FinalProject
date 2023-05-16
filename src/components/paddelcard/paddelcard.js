import React, { useState } from 'react';
import './paddelcard.css';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BlackPaddle from '../../assets/blackpaddel.jpeg';
import RedPaddle from '../../assets/redpaddel.jpeg';
import PurplePaddle from '../../assets/purplepaddel.jpeg';
import BluePaddle from '../../assets/bluepaddel.jpeg';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export default function TablecardShopping() {
    const [activeImage, setActiveImage] = useState(BlackPaddle);
    
    const handleImageChange = (image) => {
      setActiveImage(image);
    };
    
    return (
      <div>
        <div className="tablecard">
          <div className="image-container-table">
            <img src={activeImage} alt="Product Image" />
            <img className="image-slide" src={BlackPaddle} alt="Black Paddle" />
            <img className="image-slide" src={RedPaddle} alt="Red Paddle" />
            <img className="image-slide" src={PurplePaddle} alt="Purple Paddle" />
            <img className="image-slide" src={BluePaddle} alt="Blue Paddle" />
          </div>
          <div className="details-table">
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
                onClick={() => handleImageChange(PurplePaddle)}
              >
                <FiberManualRecordIcon style={{ color: "purple" ,fontSize: "18px" }} />
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