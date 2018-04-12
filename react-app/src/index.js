import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.scss';


const history = createBrowserHistory();
const middleware = [
  routerMiddleware(history),
  thunkMiddleware, // lets us dispatch() functions
  createLogger() // neat middleware that logs actions
];

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
