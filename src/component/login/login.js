import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onSumbit: PropTypes.func.isRequired
  }
  handleLogin = () => {
    console.log(this.props)
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if(username && username === '' &&
      password && password === '') {
        return;
      }
    this.props.onSumbit({
      username: username,
      password: password
    });
  }
  componentDidMount() {
    console.log(this.props.onSumbit)
    if(this.props.isLoggedIn) {
      console.log('move to dashboard');
    }
  }

  render() {
    return (
      <div className="login-page">
        <input type="username" ref="username" name="username"/>
        <input type="password" ref="password" name="password"/>
        <div>{this.props.isLoggedIn.toString()}</div>
        <button type="button" onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
