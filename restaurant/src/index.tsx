import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import { createStore } from 'redux';
import reducers from './app/reducers';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,  
  document.getElementById('root'));
serviceWorker.unregister();
