import React, { useState } from "react";
import "./carousal.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            {index === 0 && (
              <div className="carousel-text">
                <h2 className="carousel-text-title">
                  "Welcome to the Ping Pong Paradise"
                </h2>
                <p className="carousel-text-description">
                  "Discover Premium Products and Embark on an Unforgettable
                  Journey through our Training Sessions."
                </p>
              </div>
            )}

            <img src={image} alt="" className="carousel-image" />
          </div>
        ))}
      </div>

      <button className="carousel-button prev-button" onClick={goToPrevious}>
        <FaChevronLeft />
      </button>
      <button className="carousel-button next-button" onClick={goToNext}>
        <FaChevronRight />
      </button>

      <div className="carousel-pagination">
        {images.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
