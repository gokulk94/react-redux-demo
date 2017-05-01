import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import * as ActionCreators from '../action/loginAction'
import Login from '../component/login/login'
import Dashboard from '../component/Dashboard/dashboard'

const App =({actions, isloggedIn}) => 
  (
      <div>
        <Route path='/login' render={() =>
            <Login onSumbit={actions.authenticateAction} isLoggedIn={isloggedIn}/>
        }>
        </Route>
        <Route path="/dashboard" component={Dashboard} />
      </div>
  )


/*class App extends Component {
  render() {
    return (
      <div>
        <Route path='/login' render={() =>
            <Login onSumbit={this.props.actions.authenticateAction} isLoggedIn={this.props.isLoggedIn}/>
        }>
        </Route>
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  }
}*/

App.propTypes = {
  isloggedIn: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
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
