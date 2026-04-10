// src/components/Products.js
import React from 'react';
import './Page.css';

const Products = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1>Our Products</h1>
        <p>
          Powerhouse Ventures offers a variety of ice tube machines to meet the needs of various industries. Our products are designed for efficiency, durability, and ease of use. Some of our top products include:
        </p>
        <ul>
          <li><strong>Model X2000 Ice Tube Machine</strong> - A high-capacity machine perfect for large-scale operations.</li>
          <li><strong>Model S1500 Ice Tube Machine</strong> - A compact machine ideal for smaller businesses.</li>
          <li><strong>Model Z1000 Ice Tube Machine</strong> - A versatile machine with energy-saving features.</li>
        </ul>
        <p>Each machine is built with cutting-edge technology and backed by our excellent customer service. Get in touch with us for more details and pricing.</p>
      </div>
    </div>
  );
};

export default Products;