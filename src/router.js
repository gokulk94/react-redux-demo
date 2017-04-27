import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import {BrowserHistory} from 'history';
import Login from './component/login/login';
import Dashboard from './component/Dashboard/dashboard';

function loggedIn() {
  return false;
}

const Routes = () => (
    <Router history={BrowserHistory}>
      <div>

      <Route exact path="/" component={loggedIn() ? Dashboard : Login} />
      <Route exact path="/login" component={loggedIn() ? Dashboard : Login}/>
      <Route path="/dashboard" component={Dashboard}/>
      </div>
    </Router>
  )

export default Routes;
