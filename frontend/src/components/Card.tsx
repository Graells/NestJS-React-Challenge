import { Coffee } from '../context/coffeeTypes';
import '../styles/Card.css';

interface CardProps {
  coffee: Coffee;
}

const Card: React.FC<CardProps> = ({ coffee }) => {
  console.log('URL-Img:', coffee.imageUrl);
  return (
    <div className="coffee-card">
      <div>{coffee.type}</div>
      <img src={coffee.imageUrl} alt="cupPic" />
      <p>{coffee.title}</p>
      <p>{coffee.description}</p>
      <p>{coffee.price}</p>
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
