import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Rating.scss'

function Rating({ rating }) {
  // Créer un tableau d'étoiles remplies en fonction de la note
  const stars = [];
  const maxRating = 5;

  const numberOfStars = Math.round(rating);

  for (let i = 0; i < maxRating; i++) {
    if (i < numberOfStars) {
      // Ajouter une étoile remplie
      stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-filled" />);
    } else {
      // Ajouter une étoile vide
      stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-empty" />);
    }
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className="star-icon">{star}</span>
      ))}
    </div>
  );
}

export default Rating;