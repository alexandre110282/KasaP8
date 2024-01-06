import React from 'react';

import logoSvg from '../assets/LOGO.svg'; 

function Header() {
  return (
    <header className="header">
      
        <img src={logoSvg} alt="Logo" className="header-logo" />
      
      <nav>
        <ul>
          <li>Accueil</li>
          <li>À Propos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;