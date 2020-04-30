import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // named import from react-redux library
import { createStore, applyMiddleware } from 'redux';  // named import from redux library
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk));
/* Creates redux store adding the reducers,
 applyMiddleware is called and actions are sent to redux-thunk any time they are called.
 It will then be sent to the reducers after applyMiddleware
 This allow an action to also return a function as well a of a plain object
 Any function returned is automatically called with the dispatch and getState arguments
 This allows usage of aysnc actions for example */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
