import { createContext } from 'react';
import { Coffee } from './coffeeTypes';

interface CoffeeContextType {
  coffees: Coffee[];
  addCoffee: (coffee: Coffee) => void;
}
const defaultContextData = {
  coffees: [],
  addCoffee: () => {
    console.warn('addCoffee function not implemented yet');
  },
};

const CoffeeContext = createContext<CoffeeContextType>(defaultContextData);
// const CoffeeContext = createContext<CoffeeContextType | undefined>(undefined);

export default CoffeeContext;
