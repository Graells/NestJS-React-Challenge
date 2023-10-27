import { Coffee } from '../context/coffeeTypes';
import '../styles/Card.css';

interface CardProps {
  coffee: Coffee;
}

const Card: React.FC<CardProps> = ({ coffee }) => {
  // console.log('URL-Img:', coffee.imageUrl);
  return (
    <div className="coffee-card">
      <div
        className={coffee.type === 'arabic' ? 'type-arabic' : 'type-robusta'}
      >
        {coffee.type}
      </div>
      <img className="cupPic" src={coffee.imageUrl} alt="cupPic" />
      <div className="title">{coffee.title}</div>
      <div className="description">{coffee.description}</div>
      <div className="price">{coffee.price} €</div>
    </div>
  );
};

export default Card;

{
  /* <div className="border border-black">
<h1 className="text-5xl text-primary">{coffee.title}</h1>
<p className="mt-2 text-sm text-grey">{coffee.description}</p>
</div> */
}
