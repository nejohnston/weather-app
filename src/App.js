import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropDownMenu from './components/DropDownMenu';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-67&lang=e'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>

        <iframe
          title='Environment Canada Weather'
          width='287px'
          height='191px'
          src='https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-67&amp;lang=e'
          allowtransparency='true'
          frameborder='0'
        />
      </header>
      <DropDownMenu />
    </div>
  );
}

export default App;
