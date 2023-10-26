import React from 'react';
import { Coffee } from '../context/coffeeTypes';
import Card from './Card';

interface CoffeeGridProps {
  coffees: Coffee[];
}

const CoffeeGrid: React.FC<CoffeeGridProps> = ({ coffees }) => {
  return (
    <div>
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
      {/* {coffees}  */}
    </div>
  );
};

export default CoffeeGrid;
