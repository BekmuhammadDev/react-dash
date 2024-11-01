// 
import "./style.scss"
import CaruselIMg from "../../assets/CaruselIMg/Carusel1.png"
import CaruselImg2 from "../../assets/CaruselIMg/Carusel2.png"
import CaruselImg3 from "../../assets/CaruselIMg/Carusel3.png"
import { Link } from "react-router-dom"


import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: CaruselIMg, label: 'Armeniya' },
    { src: CaruselImg2, label: 'Belarus' },
    { src: CaruselImg3, label: 'Kazakhstan' },

  ];

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={handlePrev}>←</button>
      <button className="next-btn" onClick={handleNext}>→</button>

      <div className="carousel-slide-wrapper">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.label} />
          ))}
        </div>
      </div>

      <div className="nav-links">
        {images.map((image, index) => (
          < Link
            key={index}
            href="#"
            className={index === currentIndex ? 'active' : ''}
          >
            {image.label}
          </ Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
