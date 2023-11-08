import axios from 'axios';
import { Coffee } from '../context/coffeeTypes';

const BASE_URL = import.meta.env.VITE_APP_API_URL
  ? import.meta.env.VITE_APP_API_URL
  : 'http://localhost:5000';

export const getCoffees = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coffee`);
    console.log('getCoffeeService:', response.data);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch coffees: ${(error as Error).message}`);
  }
};

export const createCoffee = async (data: Coffee) => {
  try {
    const response = await axios.post(`${BASE_URL}/coffee`, data);
    console.log('createCoffeeService:', response.data);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create coffee: ${(error as Error).message}`);
  }
};
