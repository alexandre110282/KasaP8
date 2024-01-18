import React from 'react';
import ArrowCar from '../assets/Vector.png';

function Carousel({ items, currentId, onPrevious, onNext }) {
  const handlePrevious = () => {
    const currentIndex = items.findIndex((item) => item.id === currentId);
    let newIndex;

    if (currentIndex === 0) {
      // Si nous sommes au début de la liste, revenez à la fin
      newIndex = items.length - 1;
    } else {
      // Sinon, déplacez-vous vers le précédent
      newIndex = currentIndex - 1;
    }

    onPrevious(items[newIndex].id);
  };

  const handleNext = () => {
    const currentIndex = items.findIndex((item) => item.id === currentId);
    let newIndex;

    if (currentIndex === items.length - 1) {
      // Si nous sommes à la fin de la liste, revenez au début
      newIndex = 0;
    } else {
      // Sinon, passez au suivant
      newIndex = currentIndex + 1;
    }

    onNext(items[newIndex].id);
  };

  return (
    <div className="carousel">
      <img src={ArrowCar} alt="Flèche gauche" className="arrow-left" onClick={handlePrevious} />
      <img src={ArrowCar} alt="Flèche droite" className="arrow-right" onClick={handleNext} style={{ transform: 'rotate(180deg)' }} />
    </div>
  );
}

export default Carousel;