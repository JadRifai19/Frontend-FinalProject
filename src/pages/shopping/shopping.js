import React, { useState, useEffect } from "react";
import axios from "axios";
import "./shopping.css";
import Image from "../../assets/home1.webp";
import Card from "../../components/cardshopping/cardshopping.js";
import BallCard from "../../components/ballcard/ballcard";
import TableCard from "../../components/tablecard/tablecard.js";
import PaddleCard from "../../components/paddelcard/paddelcard.js";
import ShoppingCart from "../../components/shoppingcart/shoppingcart.js";
import Whatpaddel from "../../components/rightpaddelquestion/rightpaddelquestion.js";
import { useLocation } from "react-router-dom";

const Shopping = () => {
  const [cartItems, setCartItems] = useState([]);
  const [tableProducts, setTableProducts] = useState([]);
  const params = useLocation();
  const queryParams = new URLSearchParams(params.search);
  const term = queryParams.get("cart");

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  useEffect(() => {
    const fetchTableProducts = async () => {
      try {
        const response = await axios.get(
          "https://pingpong-backend-6vtc.onrender.com/product"
        );
        setTableProducts(response.data);
      } catch (error) {
        console.error("Error fetching table products:", error);
      }
    };

    fetchTableProducts();
  }, []);

  return (
    <div className="shopping">
      <div className="shopping__header">
        <img src={Image} alt="Product" className="shopping__header-image" />
        <div className="shopping-text">
          <h2 className="shopping-text-title">
            "Discover a World of Ping Pong Excellence"
          </h2>
          <p className="shopping-text-description">
            " Explore our Collection of Top-Quality Products and Enhance Your
            Playing Experience"
          </p>
        </div>
      </div>
      <p className="title-homepage">Take a look at the balls</p>
      <div className="cardshopping">
        <Card addToCart={addToCart} />
        <Card addToCart={addToCart} />
        <BallCard addToCart={addToCart} />
        <BallCard addToCart={addToCart} />
      </div>
      <p className="title-homepage">Take a look at the tables</p>
      <div className="cardshopping">
        {tableProducts.map((product) => (
          <TableCard
            key={product._id}
            addToCart={addToCart}
            productId={product._id}
          />
        ))}
      </div>
      <p className="title-homepage">Take a look at the paddles</p>
      <div className="cardshopping">
        <PaddleCard addToCart={addToCart} />
        <PaddleCard addToCart={addToCart} />
        <PaddleCard addToCart={addToCart} />
        <PaddleCard addToCart={addToCart} />
      </div>
      <div>
        <div className="question-paddel-section">
          <h2 className="title-homepage-product">
            WHICH PING PONG PADDLE IS RIGHT FOR ME?
          </h2>
        </div>
        <div className="whoweare-home">
          <Whatpaddel />
        </div>
      </div>
      {term === "open" ? (
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Shopping;
