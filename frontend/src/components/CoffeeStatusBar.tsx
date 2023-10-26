import React from 'react';

interface CoffeeStatusBarProps {
  onTypeSelect: (type: 'All' | 'robusta' | 'arabic') => void;
}

const CoffeeStatusBar: React.FC<CoffeeStatusBarProps> = ({ onTypeSelect }) => {
  return (
    <div>
      <button onClick={() => onTypeSelect('All')}>All</button>
      <button onClick={() => onTypeSelect('robusta')}>Robusta</button>
      <button onClick={() => onTypeSelect('arabic')}>Arabic</button>
    </div>
  );
};

export default CoffeeStatusBar;
