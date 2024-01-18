import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropDownMenu';
import ArrowCar from '../assets/Vector.png';
import '../styles/FicheLogement.css'
import '../styles/Star.css'

function FicheLogements({ logements }) {
  const { logementId } = useParams();
  const [currentId, setCurrentId] = useState(logementId);

  const handlePrevious = () => {
    const currentIndex = logements.findIndex((logement) => logement.id === currentId);
    let newIndex;

    if (currentIndex === 0) {
      // Si nous sommes au début de la liste, revenez à la fin
      newIndex = logements.length - 1;
    } else {
      // Sinon, déplacez-vous vers le précédent
      newIndex = currentIndex - 1;
    }

    setCurrentId(logements[newIndex].id);
  };

  const handleNext = () => {
    const currentIndex = logements.findIndex((logement) => logement.id === currentId);
    let newIndex;

    if (currentIndex === logements.length - 1) {
      // Si nous sommes à la fin de la liste, revenez au début
      newIndex = 0;
    } else {
      // Sinon, passez au suivant
      newIndex = currentIndex + 1;
    }

    setCurrentId(logements[newIndex].id);
  };

  const logement = logements.find((logement) => logement.id === currentId);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  const currentIndex = logements.findIndex((item) => item.id === currentId);
  const currentPosition = currentIndex + 1;
  const totalItems = logements.length;

  // Créer un tableau d'étoiles remplies en fonction de la note
  const stars = [];
  const rating = logement.rating;
  const maxRating = 5;

  for (let i = 0; i < maxRating; i++) {
    if (i < rating) {
      // Ajouter une étoile remplie
      stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-filled" />);
    } else if (i < Math.ceil(rating)) {
      // Ajouter une demi-étoile
      stars.push(<FontAwesomeIcon icon={faStarHalf} key={i} className="star-half-filled" />);
    } else {
      // Ajouter une étoile vide
      stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-empty" />);
    }
  }

  return (
    <div className="fiche-logements">
      <div className="logement-details">
        <div className='image-container'>
          {/* Utilisation de z-index pour placer les flèches en premier plan */}
          <img src={ArrowCar} alt="Flèche gauche" className="arrow-left" onClick={handlePrevious} />
          <img src={ArrowCar} alt="Flèche droite" className="arrow-right" onClick={handleNext} style={{ transform: 'rotate(180deg)' }} />
          <img className='logementImg' src={logement.cover} alt={logement.title} />
        </div>
        <h1>{logement.title}</h1>
        
        <p>
          {currentPosition}/{totalItems}
        </p>

        <div className="tags">
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        {/* Affichage des étoiles */}
        <div className="rating">
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>

        {/* Menu déroulant pour la description */}
        <DropdownMenu title="Description">
          <p>{logement.description}</p>
        </DropdownMenu>

        {/* Menu déroulant pour les équipements */}
        <DropdownMenu title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default FicheLogements;