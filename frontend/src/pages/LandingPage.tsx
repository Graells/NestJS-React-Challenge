import React, { useState, useContext } from 'react';
import CoffeeContext from '../context/coffeeContext';
import Header from '../components/Header';
import CoffeeStatusBar from '../components/CoffeeStatusBar';
import CoffeeGrid from '../components/CoffeeGrid';
import Footer from '../components/Footer';
import { Coffee } from '../context/coffeeTypes';
import CoffeeForm from '../components/CoffeeForm';
import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
  const { coffees, addCoffee } = useContext(CoffeeContext);
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<
    'All' | 'robusta' | 'arabic'
  >('All');
  const handleNewCoffee = () => {
    setFormVisible(!isFormVisible);
  };
  const handleSubmitCoffee = (coffee: Coffee) => {
    addCoffee(coffee);
    setSelectedType('All');
    setFormVisible(false);
    if (coffeeGridRef.current) {
      const position = coffeeGridRef.current.offsetHeight;
      console.log('position:', position);
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };
  const coffeeGridRef = React.useRef(null);

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
