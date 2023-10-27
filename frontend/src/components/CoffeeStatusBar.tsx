import React from 'react';
import '../styles/CoffeeStatusBar.css';

interface CoffeeStatusBarProps {
  onTypeSelect: (type: 'All' | 'robusta' | 'arabic') => void;
  selectedType: 'All' | 'robusta' | 'arabic';
}

const CoffeeStatusBar: React.FC<CoffeeStatusBarProps> = ({
  onTypeSelect,
  selectedType,
}) => {
  return (
    <div className="status-bar">
      <p>MVST. EXCLUSIVE COFFEE</p>
      <div className="button-wrap">
        <button
          className={selectedType === 'All' ? 'selected' : ''}
          onClick={() => onTypeSelect('All')}
        >
          All
        </button>
        <button
          className={selectedType === 'robusta' ? 'selected' : ''}
          onClick={() => onTypeSelect('robusta')}
        >
          Robusta
        </button>
        <button
          className={selectedType === 'arabic' ? 'selected' : ''}
          onClick={() => onTypeSelect('arabic')}
        >
          Arabic
        </button>
      </div>
    </div>
  );
};

export default CoffeeStatusBar;
