import { createContext } from 'react';
import { Coffee } from './coffeeTypes';

interface CoffeeOperationResult {
  status: OperationStatus;
  message?: string;
}
enum OperationStatus {
  SUCCESS,
  DUPLICATE,
  ERROR,
}
interface CoffeeContextType {
  coffees: Coffee[];
  addCoffee: (coffee: Coffee) => Promise<CoffeeOperationResult>;
}
const defaultContextData = {
  coffees: [],
  addCoffee: async () => ({
    status: OperationStatus.ERROR,
    message: 'Default function',
  }),
};

const CoffeeContext = createContext<CoffeeContextType>(defaultContextData);
// const CoffeeContext = createContext<CoffeeContextType | undefined>(undefined);

export default CoffeeContext;
