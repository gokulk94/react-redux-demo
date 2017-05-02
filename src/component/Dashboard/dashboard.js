import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Dashboard extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  handleLogout = () => {
    this.props.onSubmit();
  }
  render() {
    return (
      <div className="App">
       In Dashboard
       <button type="button" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
