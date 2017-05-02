import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { verifyUserDetails } from '../../api/api'
import './login.css'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldEmptyError: false
    }
  }
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onSumbit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  handleLogin = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if(username === '' || password === '') {
      this.setState({
        fieldEmptyError: true
      });
      return ;
    }
    verifyUserDetails({
      username: username,
      password: password
    }).then((data) => {
      this.props.onSumbit(data);
    }).catch((e) => {
      this.props.onSumbit(e);
      console.info(e)
    })
  }
  componentDidMount() {
    if(this.props.isLoggedIn) {
       this.props.history.push('/dashboard')
    }
  }
  componentWillReceiveProps(nextProp) {
    if(nextProp.isLoggedIn) {
      this.props.history.push('/dashboard')
    }
  }
  render() {
    return (
      <div className="login-page">
        <input className="input-field" type="username" ref="username" name="username"/>
        <input className="input-field" type="password" ref="password" name="password"/>
        <button type="button" onClick={this.handleLogin}>Login</button>
        {this.state.fieldEmptyError ? (<span>Field is empty</span>) : ''}
      </div>
    );
  }
}
