import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { verifyUserDetails } from '../../api/api'

export default class Login extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onSumbit: PropTypes.func.isRequired
  }
  handleLogin = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if(username && username === '' &&
      password && password === '') {
        return;
    }
    verifyUserDetails({
      username: username,
      password: password
    }).then((data) => {
      this.props.onSumbit(data);
    })
  }
  componentDidMount() {

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
