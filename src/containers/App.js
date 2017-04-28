import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import * as ActionCreators from '../action/loginAction'
import Login from '../component/login/login'
import Dashboard from '../component/Dashboard/dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <Login onSumbit={this.props.actions.authenticateAction} isLoggedIn={this.props.isLoggedIn}/>
        {/*<Route path="/login" re={Login} />*/}
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  console.log(state.login);
  return {
    isLoggedIn: state.login.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
