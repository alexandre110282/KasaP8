import React, { useState } from 'react';
import ArrowCar from '../assets/Vector.png';

function Carousel({ images, currentImageIndex, onChange }) {
  const handlePrevious = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    onChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    onChange(newIndex);
  };

  // Condition pour rendre les flèches
  const showArrows = images.length > 1;

  return (
    <div className="carousel">
      {showArrows && (
        <>
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
        </>
      )}
      <img className= 'carousel-image' src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
}
export default Carousel;