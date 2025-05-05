import React from 'react';
import './App.css';
import ElegantNote from './components/ElegantNote/ElegantNote';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> ElegantNote
            </div>
          </div>
        </div>
      </nav>

      <ElegantNote />
    </div>
  );
}

export default App;