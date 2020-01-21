import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import './index.scss';
import App from './app/App';
import reducers from './app/reducers';
import rootSaga from './services/sagas';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,  
  document.getElementById('root'));
serviceWorker.unregister();
