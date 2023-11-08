import { forwardRef } from 'react';
import { Coffee } from '../context/coffeeTypes';
import Card from './Card';
import '../styles/CoffeGrid.css';
interface CoffeeGridProps {
  coffees: Coffee[];
}

const CoffeeGrid = forwardRef<HTMLDivElement, CoffeeGridProps>(
  ({ coffees }, ref) => {
    return (
      <div className="grid-wrap" ref={ref}>
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    );
  }
);

export default CoffeeGrid;
