import React, { useState, useContext, useRef } from 'react';
import CoffeeContext from '../context/coffeeContext';
import Header from '../components/Header';
import CoffeeStatusBar from '../components/CoffeeStatusBar';
import CoffeeGrid from '../components/CoffeeGrid';
import Footer from '../components/Footer';
import { Coffee } from '../context/coffeeTypes';
import CoffeeForm from '../components/CoffeeForm';
import '../styles/LandingPage.css';
import { toast } from 'react-toastify';
enum OperationStatus {
  SUCCESS,
  DUPLICATE,
  ERROR,
}
interface CoffeeOperationResult {
  status: OperationStatus;
  message?: string;
}

const LandingPage: React.FC = () => {
  const { coffees, addCoffee } = useContext(CoffeeContext);
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<
    'All' | 'robusta' | 'arabic'
  >('All');
  const handleNewCoffee = () => {
    setFormVisible(!isFormVisible);
  };
  const handleSubmitCoffee = async (coffee: Coffee) => {
    const result: CoffeeOperationResult = await addCoffee(coffee);

    if (result.status === OperationStatus.SUCCESS) {
      setSelectedType('All');
      setFormVisible(false);
      if (coffeeGridRef.current) {
        const position = coffeeGridRef.current.offsetHeight;
        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    } else if (result.status === OperationStatus.DUPLICATE) {
      toast.error('A coffee with the same name already exists!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
      setFormVisible(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (result.status === OperationStatus.ERROR) {
      toast.error(result.message || 'Unknown error', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
    }
  };
  const coffeeGridRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="landing-page">
      <Header onButtonCoffee={handleNewCoffee} />
      <main>
        {isFormVisible && (
          <div className="overlay">
            <CoffeeForm
              onSubmit={handleSubmitCoffee}
              onDiscard={handleNewCoffee}
            />
          </div>
        )}
        <CoffeeStatusBar
          onTypeSelect={(type) => setSelectedType(type)}
          selectedType={selectedType}
        />
        <CoffeeGrid
          ref={coffeeGridRef}
          coffees={
            selectedType === 'All'
              ? coffees
              : coffees.filter((coffee: Coffee) => coffee.type === selectedType)
          }
        />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
