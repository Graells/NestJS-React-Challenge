import React from 'react';

interface HeaderProps {
  onButtonCoffee: () => void;
}

const Header: React.FC<HeaderProps> = ({ onButtonCoffee }) => {
  return (
    <header style={{ backgroundImage: '../../public/backGroundHeader.jpg' }}>
      <span>MVST coffe</span>
      <button onClick={onButtonCoffee}>Create</button>
    </header>
  );
};

export default Header;
