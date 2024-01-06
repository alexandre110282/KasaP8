import React from 'react';
import Card from './Card';
import '../styles/CardList.css'; // Assurez-vous d'avoir un fichier CSS pour styliser la liste des cartes

const cardData = [
  { id: 1, title: 'Titre de la location 1', image: 'chemin-vers-image-1.jpg' },
  { id: 2, title: 'Titre de la location 2', image: 'chemin-vers-image-2.jpg' },
  // ... Ajoutez autant d'objets que nécessaire
];

function CardList() {
  return (
    <div className="card-list">
      {cardData.map((card) => (
        <Card key={card.id} title={card.title} image={card.image} />
      ))}
    </div>
  );
}

export default CardList;