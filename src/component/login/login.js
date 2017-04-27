import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Login extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
  }
  handleLogin = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if(username && username == '' &&
      password && password == '') {
        return;
      }
    this.props.actions.authenticateUser({
      username: username,
      password: password
    });
  }
  componentWillReceiveProps() {
    if(this.props.isLoggedIn) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="login-page">
        <input type="username" ref="username" name="username"/>
        <input type="password" ref="password" name="password"/>
        <button type="button" onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
