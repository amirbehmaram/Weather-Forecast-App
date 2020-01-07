import React from 'react';
import otter from './icons/otter.svg';
import Weather from './weather.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={otter} className="App-logo" alt="Otter Logo" />
      </header>
      <section>
        <h1>Let the Otter tell you the weather.</h1>
        <Weather></Weather>
      </section>
    </div>
  );
}

export default App;
