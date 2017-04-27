import React, { Component } from 'react';
import request from 'superagent';
import { authenticateUser } from '../../action/loginAction';
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props);
  }
  handleLogin = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if(username && username == '' &&
      password && password == '') {
        return;
      }
    authenticateUser({
      username: username,
      password: password
    });
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

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(Login);
