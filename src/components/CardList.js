import React from 'react';
import Card from './Card';
import '../styles/CardList.css';
import cardData from './listeLogement.json';

function CardList() {
  return (
    <div className="card-list">
      {cardData.map((card) => (
        <Card key={card.id} title={card.title} image={card.cover} />
      ))}
    </div>
  );
}

export default CardList;