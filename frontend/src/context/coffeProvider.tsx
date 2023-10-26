import React, { useState, useEffect, ReactNode } from 'react';
import CoffeeContext from './coffeeContext';
import { Coffee } from './coffeeTypes';
import { createCoffee, getCoffees } from '../services/coffeeService';

interface CoffeeProviderProps {
  children: ReactNode;
}

const CoffeeProvider: React.FC<CoffeeProviderProps> = ({ children }) => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await getCoffees();
        setCoffees(response.data);
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    fetchCoffees();
  }, []);

  const addCoffee = async (coffee: Coffee) => {
    try {
      const newCoffee = await createCoffee(coffee);
      setCoffees((prevCoffees) => [...prevCoffees, newCoffee]);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return (
    <CoffeeContext.Provider value={{ coffees, addCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeProvider;
