import React from 'react';
import './Header.css';
import logoImage from './assets/dp.jpg'; // Import the image

const Header = () => {
  return (
    <header className="header">
    <div className="logo">
      <img src={logoImage} alt="Logo" />
    </div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  );
}

export default Header;
