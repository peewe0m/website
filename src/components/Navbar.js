// src/components/Navbar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getBtnClass = (path) => {
    return location.pathname === path ? 'navbar-btn active' : 'navbar-btn';
  };

  return (
    <nav className="navbar">
      <img
        src="/images/phvc.png"
        alt="Logo"
        className="logo"
        onClick={() => navigate('/')}
      />

      <div className="navbar-buttons">
        <button className={getBtnClass('/')} onClick={() => navigate('/')}>
          Home
        </button>
        <button className={getBtnClass('/about')} onClick={() => navigate('/about')}>
          About
        </button>
        <button className={getBtnClass('/services')} onClick={() => navigate('/services')}>
          Services
        </button>
        <button className={getBtnClass('/products')} onClick={() => navigate('/products')}>
          Products
        </button>
        <button className={getBtnClass('/contact')} onClick={() => navigate('/contact')}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;