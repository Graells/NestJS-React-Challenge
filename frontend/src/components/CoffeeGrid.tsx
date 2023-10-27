import React from 'react';
import { Coffee } from '../context/coffeeTypes';
import Card from './Card';
import '../styles/CoffeGrid.css';
interface CoffeeGridProps {
  coffees: Coffee[];
}

const CoffeeGrid: React.FC<CoffeeGridProps> = ({ coffees }) => {
  return (
    <div className="grid-wrap">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeGrid;
