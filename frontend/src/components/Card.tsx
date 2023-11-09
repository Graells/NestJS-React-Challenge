import { Coffee } from '../context/coffeeTypes';
import '../styles/Card.css';

interface CardProps {
  coffee: Coffee;
}

const Card: React.FC<CardProps> = ({ coffee }) => {
  const defaultImageUrl =
    'https://cupscoffee.s3.eu-west-3.amazonaws.com/no-image-availableWhite.png';

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = defaultImageUrl;
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
