import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

// import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

// {/*
// <Route path="/dashboard" component={Dashboard} />
// <Route render={() => (<span>404</span>)} />*/}


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
