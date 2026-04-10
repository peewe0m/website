// src/App.js
import React from 'react';
import './App.css';
import HomePage from './components/HomePage'; // Import the new HomePage component

function App() {
  return (
    <div className="App">
      <HomePage /> {/* Render the homepage */}
    </div>
  );
}

export default App;