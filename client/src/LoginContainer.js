import React, { Component } from 'react';
import Login from './Login';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      response: null
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createNotification = this.createNotification.bind(this);
  }
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success(this.state.response, 'Success!', 2500);;
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error(this.state.response, 'Error', 2500);
          break;
      }
    };
  };
  // Handles changes to email and password fields
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      if (result.data.hasOwnProperty('error')) {
        console.log(result.data.message)
        this.setState({
          response: result.data.message
        }, this.createNotification('error'))
      } else {
        console.log(result.data)
        localStorage.setItem('mernToken', result.data.token)
        this.props.liftToken(result.data);
        this.setState({
          response: 'You\'re logged in. Welcome to ORCA.'
        }, this.createNotification('success'))
        // Redirect to profile here...
        this.props.history.push("/profile");
      }
    })
}

  render() {
    return (
      <Login handleInputChange={this.handleInputChange}
             handleSubmit={this.handleSubmit}
             email={this.state.email}
             password={this.state.password}
             response={this.state.response}
      />
    )
  }
}

export default withRouter(LoginContainer)
