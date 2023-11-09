import React from 'react';
import '../styles/Header.css';
import logo from '../assets/TSVMcoffee.svg';

interface HeaderProps {
  onButtonCoffee: () => void;
}

const Header: React.FC<HeaderProps> = ({ onButtonCoffee }) => {
  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="TSVM Coffee Logo" className="logo" />
        <button className="create-btn" onClick={onButtonCoffee}>
          Create
        </button>
      </div>
      <div className="header-box">
        <p className="big-title">ROASTED COFFEE</p>
        <p className="description">
          Choose a coffe from below or create your own.
        </p>
        <button className="create-own-btn" onClick={onButtonCoffee}>
          Create your own coffee
        </button>
      </div>
    </header>
  );
};

export default Header;
