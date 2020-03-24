import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import LocationContainer from './containers/Location/LocationContainer';

const Weather = () => (
  <Provider store={store}>
    <div className='App'>
      <header className='App-header'>
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
        <LocationContainer />
      </header>
    </div>
  </Provider>
);

ReactDOM.render(<Weather />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
