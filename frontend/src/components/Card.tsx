import { Coffee } from '../context/coffeeTypes';
import '../styles/Card.css';

interface CardProps {
  coffee: Coffee;
}

const Card: React.FC<CardProps> = ({ coffee }) => {
  const defaultImageUrl =
    'https://mvstcups.s3.eu-north-1.amazonaws.com/no-image-availableWhite.png';

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = defaultImageUrl;
  };
  return (
    <div className="coffee-card">
      <div
        className={coffee.type === 'arabic' ? 'type-arabic' : 'type-robusta'}
      >
        {coffee.type}
      </div>
      <img
        className="cupPic"
        src={coffee.imageUrl}
        alt="Coffee picture"
        onError={handleImageError}
      />
      <div className="details">
        <div className="title">{coffee.title}</div>
        <div className="description">{coffee.description}</div>
        <div className="price">{coffee.price} €</div>
      </div>
    </div>
  );
};

export default Card;
