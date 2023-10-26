import axios from 'axios';
import { Coffee } from '../context/coffeeTypes';

const BASE_URL = 'http://localhost:5000';

export const getCoffees = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coffee`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch coffees: ${(error as Error).message}`);
  }
};

export const createCoffee = async (data: Coffee) => {
  try {
    const response = await axios.post(`${BASE_URL}/coffee`, data);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create coffee: ${(error as Error).message}`);
  }
};
