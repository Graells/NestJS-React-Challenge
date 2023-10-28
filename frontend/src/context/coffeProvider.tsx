import React, { useState, useEffect, ReactNode } from 'react';
import CoffeeContext from './coffeeContext';
import { Coffee } from './coffeeTypes';
import { createCoffee, getCoffees } from '../services/coffeeService';

interface CoffeeProviderProps {
  children: ReactNode;
}
enum OperationStatus {
  SUCCESS,
  DUPLICATE,
  ERROR,
}
interface CoffeeOperationResult {
  status: OperationStatus;
  message?: string;
}

const CoffeeProvider: React.FC<CoffeeProviderProps> = ({ children }) => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    fetchCoffees();
  }, []);
  const fetchCoffees = async () => {
    try {
      const arrayCoffees = await getCoffees();
      console.log('fetchCoffeeProvider: ', arrayCoffees);

      setCoffees(arrayCoffees);
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const addCoffee = async (coffee: Coffee): Promise<CoffeeOperationResult> => {
    const nameAlreadyExists = coffees.some(
      (existingCoffee) => existingCoffee.title === coffee.title
    );
    if (nameAlreadyExists) {
      return {
        status: OperationStatus.DUPLICATE,
        message: 'A coffee with the same name already exists!',
      };
    }
    try {
      const newCoffee = await createCoffee(coffee);
      setCoffees((prevCoffees) => [...prevCoffees, newCoffee]);
      return { status: OperationStatus.SUCCESS };
    } catch (error) {
      console.error((error as Error).message);
      return {
        status: OperationStatus.ERROR,
        message: 'Failed to add coffee. Please try again.',
      };
    }
  };

  return (
    <CoffeeContext.Provider value={{ coffees, addCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeProvider;
