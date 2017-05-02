import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import * as ActionCreators from '../action/loginAction'
import Login from '../component/login/login'
import Dashboard from '../component/Dashboard/dashboard'

const PrivateRouter = ({path, Component, isloggedIn, actions, history}) => {
    return (<Route path={path} render={() => isloggedIn ? <Component
    onSumbit={actions} history={history}/>
    : <Redirect to="/login"/>} />)
}

const App = ({actions, isloggedIn, history}) =>
  (
      <div>
        <Redirect from="/" to="/login"/>
        <Route path='/login' render={() =>
            <Login onSumbit={actions.userLoginSuccess} isLoggedIn={isloggedIn} history={history}/>
        } />
        <PrivateRouter path="/dashboard" Component={Dashboard}
            actions={actions.logoutAction} isloggedIn={isloggedIn} history={history}/>
      </div>
  )

App.propTypes = {
  isloggedIn: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    isloggedIn: state.login.isloggedIn
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
