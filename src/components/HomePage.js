// src/components/HomePage.js
import React from 'react';
import './HomePage.css';  // Import the CSS for homepage

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <img src="/images/phvc.png" alt="Logo" className="logo" />
        <div className="title">Powerhouse Ventures Corporation</div> {/* Title beside the logo */}
        <div className="subtitle">The Philippines Number One Ice Tube Machine Supplier!</div> {/* Subtitle under the title */}
        <div className="navbar-buttons">
          <button className="navbar-btn">Home</button>
          <button className="navbar-btn">About</button>
          <button className="navbar-btn">Services</button>
          <button className="navbar-btn">Products</button>
          <button className="navbar-btn">Contact</button>
        </div>
      </nav>
      
      {/* Background Image */}
      <div className="background">
        {/* More content can go here */}
      </div>

      {/* Buttons under Subtitle */}
      <div className="cta-buttons">
        <button className="cta-btn learn-more">Learn More</button>
        <button className="cta-btn contact-us">Contact Us</button>
      </div>
    </div>
  );
};

export default HomePage;