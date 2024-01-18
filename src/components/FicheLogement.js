import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DropdownMenu from './DropDownMenu';
import Carousel from './Carousel';
import Rating from './Rating';
import '../styles/FicheLogement.css';

function FicheLogements({ logements }) {
  const { logementId } = useParams();
  const [currentId, setCurrentId] = useState(logementId);

  const logement = logements.find((logement) => logement.id === currentId);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  const currentIndex = logements.findIndex((item) => item.id === currentId);
  const totalItems = logements.length;

  return (
    <div className="fiche-logements">
      <div className="logement-details">
        <div className='image-container'>
          {/* Utilisation du composant Carousel pour gérer le carrousel */}
          {totalItems > 1 && ( // Vérifiez s'il y a plus d'une image avant d'afficher le compteur
            <Carousel items={logements} currentId={currentId} onPrevious={setCurrentId} onNext={setCurrentId} />
          )}
          {/* Affichage du compteur de position uniquement s'il y a plus d'une image */}
        {totalItems > 1 && (
          <p>
            {currentIndex + 1}/{totalItems}
          </p>
        )}
          <img className='logementImg' src={logement.cover} alt={logement.title} />
        </div>
        <h1>{logement.title}</h1>
        <div className='hostName'>
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} />
        </div>
        <div className="tags">
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
  

        {/* Affichage du rating en utilisant le composant Rating */}
        <Rating rating={logement.rating} />

        <div className='allDropDown'>
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
    </div>
  );
}

export default FicheLogements;