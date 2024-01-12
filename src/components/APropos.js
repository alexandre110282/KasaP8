import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Banner from './Banner.js';
import DropDownMenu from './DropDownMenu.js';
import FicheLogement from './FicheLogement';
import Footer from './Footer.js';

function APropos() {
  return (
    <div className="APropos">
      <Header />
      <Banner />
      {/* Premier menu déroulant */}
      <DropDownMenu title="Fiablilité">
        Les annonces postées sur Kasa garantissent une fiablilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      </DropDownMenu>

      {/* Deuxième menu déroulant */}
      <DropDownMenu title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
      </DropDownMenu>

      {/* Troisième menu déroulant */}
      <DropDownMenu title="Service">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
      </DropDownMenu>

      {/* Quatrième menu déroulant */}
      <DropDownMenu title="Sécurité">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note ausi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
      </DropDownMenu>
      <Routes>
        <Route path="/fiche-logement" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default APropos;