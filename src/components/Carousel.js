import React, { useState } from 'react';
import ArrowCar from '../assets/Vector.png'

function Carousel({ images, currentImage }) {
  const [currentIdx, setCurrentIdx] = useState(images.indexOf(currentImage));

  const handlePrevious = () => {
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <div className="carousel">
      <img
        src={images[currentIdx]}
        alt={`Image ${currentIdx + 1}`}
        className="carousel-image"
      />
      <div className="carousel-arrows">
        <img
          src={ArrowCar}
          alt="Flèche gauche"
          className="arrow-left"
          onClick={handlePrevious}
        />
        <img
          src={ArrowCar}
          alt="Flèche droite"
          className="arrow-right"
          onClick={handleNext}
          style={{ transform: 'rotate(180deg)' }}
        />
      </div>
    </div>
  );
}

export default Carousel;