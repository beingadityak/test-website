import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React world! This is a sample application on ReactJS
        </p>
        <a
          className="App-link"
          href="https://beingadityak.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Simple app by @beingadityak
        </a>
      </header>
    </div>
  );
}

export default App;
