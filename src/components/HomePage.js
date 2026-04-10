// src/components/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <img src="/images/phvc.png" alt="Logo" className="logo" />
        </div>

        <div className={`navbar-buttons ${isMenuOpen ? 'open' : ''}`}>
          <button className="navbar-btn">Home</button>
          <button className="navbar-btn">About</button>
          <button className="navbar-btn">Machine</button>
          <button className="navbar-btn">Services</button>
          <button className="navbar-btn">Contact</button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="title">Powerhouse Ventures Corporation</h1>
        <p className="subtitle">
          The Philippines Number One Ice Tube Machine Supplier!
        </p>

        <div className="cta-buttons">
          <button className="cta-btn learn-more">Learn More</button>
          <button className="cta-btn contact-us">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;