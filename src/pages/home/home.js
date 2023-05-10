import React from 'react';
import Carousel from '../../components/carousal/carousal.js';
import Image1 from '../../assets/download.jpeg';
import Image2 from '../../assets/images.jpeg';
import './home.css';

export default function Home() {
  const slides = [Image1, Image2];

  return (
    <div className="home">
      <Carousel images={slides} />
    </div>
  );
}