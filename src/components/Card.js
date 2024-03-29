import { useNavigate } from 'react-router-dom';
import '../styles/Card.scss'

function Card({ title, image, logement }) {
  const navigate = useNavigate(); // Utilisez useNavigate pour gérer la navigation

  const handleClick = () => {
    // Rediriger l'utilisateur vers la page FicheLogements.js avec l'ID du logement
    navigate(`/fiche-logement/${logement.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={title} />
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;