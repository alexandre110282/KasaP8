import { useState } from 'react';
import { useParams, Navigate} from 'react-router-dom';
import DropdownMenu from './DropDownMenu';
import Carousel from './Carousel';
import Rating from './Rating';
import '../styles/FicheLogement.scss';

function FicheLogements({ logements }) {
  const { logementId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const logement = logements.find((logement) => logement.id === logementId);

  if (!logement) {
    // Rediriger l'utilisateur vers la page 404
    return <Navigate to="*" />;
  }

  const totalImages = logement.pictures.length;

  const handleCarouselChange = (newImageIndex) => {
    // Mettez à jour l'index de l'image actuelle lorsque le carrousel change d'image
    setCurrentImageIndex(newImageIndex);
  };

  return (
    <div className="fiche-logements">
      <div className="logement-details">
        <div className='image-container'>
          {/* Utilisation du composant Carousel pour gérer le carrousel */}
          <Carousel
            images={logement.pictures}
            currentImageIndex={currentImageIndex}
            onChange={handleCarouselChange}
          />
          {/* Affichage du compteur de position uniquement s'il y a plus d'une image */}
          {totalImages > 1 && (
            <p className='img-counter'>
              {currentImageIndex + 1}/{totalImages}
            </p>
          )}
        </div>

        <div className='infos'>
          <div className='titleAndTags'>
            <h1 className='locationTitle'>{logement.title}</h1>
            <p className='locationPlace'>{logement.location}</p>
            <div className="tags">
              <ul>
                {logement.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className='nameAndRating'>
            <div className='hostName'>
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            {/* Affichage du rating en utilisant le composant Rating */}
            <Rating rating={logement.rating} />
          </div>
        </div>

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