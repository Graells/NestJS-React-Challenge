import React, { useState, useContext } from 'react';
import CoffeeContext from '../context/coffeeContext';
import Header from '../components/Header';
import CoffeeStatusBar from '../components/CoffeeStatusBar';
import CoffeeGrid from '../components/CoffeeGrid';
import Footer from '../components/Footer';
import { Coffee } from '../context/coffeeTypes';
import CoffeeForm from '../components/CoffeeForm';

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
  };
  return (
    <div>
      <Header onButtonCoffee={handleNewCoffee} />
      {isFormVisible && <CoffeeForm onSubmit={handleSubmitCoffee} />}
      <h1>Main Title</h1>
      <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        Go to Body
      </button>
      <CoffeeStatusBar onTypeSelect={(type) => setSelectedType(type)} />
      <CoffeeGrid
        coffees={
          selectedType === 'All'
            ? coffees
            : coffees.filter((coffee: Coffee) => coffee.type === selectedType)
        }
      />
      <Footer />
    </div>
  );
};

export default LandingPage;

// import { Card } from '@/components/Card';
// import { fetchItems } from '@/services/fetchItems';

// export default async function Home() {
//   const items = await fetchItems();

//   return (
//     <main className='mx-10 mt-12 px-10'>
//       <h1 className='text-3xl mb-10'>You&apos;ve got this! 🚀</h1>
//       {items.map(({ id, title, description }) => (
//         <Card key={id} title={title} description={description} />
//       ))}
//     </main>
//   );
// }
