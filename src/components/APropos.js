import React from 'react';
import DropDownMenu from './DropDownMenu.js';

function APropos() {
  return (
    <div className="APropos">
      
      
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
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
      </DropDownMenu>
      
    </div>
  );
}

export default APropos;