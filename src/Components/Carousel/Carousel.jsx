
import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
    "/images/Projectimage1.jpg",
    "/images/Woman2.jpg",
    "/images/computer-1149148.jpg",
    "/images/pexels-tima-miroshnichenko-8376277.jpg",
];
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="nav-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="carousel-image"
      />
      <button className="nav-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
