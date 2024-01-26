import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.scss';
import logoSvg from '../assets/LOGO.svg';

function Header() {
  const navigate = useNavigate();

  // Fonction pour naviguer vers la page À Propos lorsque le mot est cliqué
  const goToAPropos = () => {
    navigate('/a-propos');
  };

  // Fonction pour naviguer vers la page principale lorsque "Accueil" est cliqué
  const goToAccueil = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <img src={logoSvg} alt="Logo" className="logotype" />
      <nav >
        <ul className='nav__list'>
          <li onClick={goToAccueil}>Accueil</li>
          <li onClick={goToAPropos}>À Propos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;