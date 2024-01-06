import React from 'react';
import '../styles/Card.css'

function Card({ title, image }) {
  return (
    <div className="card">
      {/*<img src={image} alt={title} />//*/}
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;