import React, { useState } from "react";
import './carousal.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
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
            className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
