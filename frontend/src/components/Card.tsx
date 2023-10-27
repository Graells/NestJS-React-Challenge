import { Coffee } from '../context/coffeeTypes';
import '../styles/Card.css';
import blackCup from '../assets/blackCup.png';
import clearCup from '../assets/clearCup.png';
interface CardProps {
  coffee: Coffee;
}

const Card: React.FC<CardProps> = ({ coffee }) => {
  console.log('pathImg', coffee.imageUrl);
  return (
    <div className="coffee-card">
      <div>{coffee.type}</div>
      <img src={blackCup} alt="cupPic" />
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
