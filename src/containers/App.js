import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as adminActions from '../action/loginAction'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {BrowserHistory} from 'history';
import Login from '../component/login/login'

const App = ({isLoggedIn, actions}) => (
  <Router history={BrowserHistory}>
      <div>
        <Route exact path="/"/>
        <Route exact path="/login" render={() => (<Login isLoggedIn={isLoggedIn} actions={actions}/>)} />
        <Route path="/dashboard"/>
      </div>
    </Router>
)

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(adminActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
