import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img 
        src='https://cupscoffee.s3.eu-west-3.amazonaws.com/GroupGrain.png' 
        alt='Background' 
        className="footer-background"
      />
      <div className="footer-content">
        <span className="footer-title">TSVM</span>
        {' '}
        <span className="footer-subtitle">coffee</span>
      </div>
    </footer>
  )
}; 
 
export default Footer;
