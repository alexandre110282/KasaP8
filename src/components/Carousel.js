import React, { useState } from 'react';
import ArrowCar from '../assets/Vector.png';

function Carousel({ images, currentImageIndex, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    onChange(newIndex); // Notifiez le parent de l'index de la nouvelle image
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    onChange(newIndex); // Notifiez le parent de l'index de la nouvelle image
  };

  return (
    <div className="carousel">
      <img src={ArrowCar} alt="Flèche gauche" className="arrow-left" onClick={handlePrevious} />
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className='carousel-image'/>
      <img src={ArrowCar} alt="Flèche droite" className="arrow-right" onClick={handleNext} style={{ transform: 'rotate(180deg)' }} />
    </div>
  );
}

export default Carousel;