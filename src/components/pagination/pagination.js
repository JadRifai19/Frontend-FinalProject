import React from 'react';
import './pagination.css';
import jadImage from '../../assets/orangeball.jpeg';
import ramiImage from '../../assets/whiteball.jpeg';

const Pagination = () => {
  const handleNameClick = (name) => {
    console.log(`${name} clicked`);
  };

  return (
    <div className="paginationWrapper">
      <button className="paginationButton" onClick={() => handleNameClick('Jad')}>
        <img className="paginationImage" src={jadImage} alt="Jad" />
      </button>
      <button className="paginationButton" onClick={() => handleNameClick('Rami')}>
        <img className="paginationImage" src={ramiImage} alt="Rami" />
      </button>
    </div>
  );
};

export default Pagination;