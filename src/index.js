import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sSweather = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(
  <React>
    <App />
    <script src='//weather.gc.ca/wxlink/site_js/s0000409_e.js' />
    <script type='text/javascript' src='js/wxlink.js' />
  </React>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
