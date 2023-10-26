import { Coffee } from '../context/coffeeTypes';

interface CardProps {
  coffee: Coffee;
}

const Card: React.FC<CardProps> = ({ coffee }) => {
  return (
    <div>
      <h1>{coffee.title}</h1>
      <p>{coffee.description}</p>
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
