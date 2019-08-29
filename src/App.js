
import React from 'react';
import logo from './logo.svg';
import a from './a.jpg'
import b from './b.jpg'
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div id='container'>
          <div>
            <img src={a} className='App-logo' />
          </div>
          <div>
            <img src={b} className='App-logo' />
          </div>
        </div>
        <p id='title'>
          The Most gorgeous girl in the world.
        </p>
        <a
          className='App-link'
          href='https://www.facebook.com/profile.php?id=100010114126289'
          target='_blank'
          rel='noopener noreferrer'
        >
          🌹🌹🌹🌹 Learn Her 🌹🌹🌹🌹
        </a>
      </header>
    </div>
  );
}

export default App;
