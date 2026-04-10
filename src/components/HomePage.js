// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="home-overlay">
        <div className="hero-content">
          <h1 className="title">Powerhouse Ventures Corporation</h1>
          <p className="subtitle">
            The Philippines Number One Ice Tube Machine Supplier
          </p>
          {/* <p className="subtitle">
            From Cubes  to Profits <br/>We help your  Business <br/>stay cool and Grow
          </p> */}


          <div className="cta-buttons">
            <button className="cta-btn" onClick={() => navigate('/about')}>
              Learn More
            </button>
            <button className="cta-btn" onClick={() => navigate('/contact')}>
              Contact Us
            </button>

            
          </div>
        </div>
        <p className="subtitle2">
            From Cubes  to Profits We help your  Business stay cool and Grow
          </p>
        
      </div>
    </div>
  );
};

export default HomePage;