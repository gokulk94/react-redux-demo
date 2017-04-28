import React from 'react';
import { render } from 'react-dom';
// import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Root from './containers/Root';

const store = configureStore()
console.log(store.getState())
// const history = syncHistoryWithStore(browserHistory, store)
render(
  <Root store={store} />,
  document.getElementById('root')
)
