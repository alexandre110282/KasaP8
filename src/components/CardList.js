import Card from './Card';
import '../styles/CardList.scss';
import cardData from './listeLogement.json';

function CardList() {
  return (
    <div className="card-list">
      {cardData.map((card) => (
        <Card key={card.id} title={card.title} image={card.cover} logement={card} />
      ))}
    </div>
  );
}

export default CardList;