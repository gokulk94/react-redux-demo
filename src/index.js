import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/index'

// console.log(reducer)
import App from './containers/App';
// import {authenticateUser} from './action/loginAction'
import './index.css';

const store = createStore(reducer)

// store.dispatch(authenticateUser())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)