import React, {Component} from 'react';
import Signup from './Signup';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class SignupContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      first: '',
      last: '',
      username: '',
      phone: '',
      dob: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      password: '',
      question: '',
      answer: '',
      response: ''
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
            NotificationManager.success(this.state.response, 'Success!', 2500);
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
    axios.post('/auth/signup', {
      first: this.state.first,
      last: this.state.last,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      dob: this.state.dob,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      password: this.state.password,
      question: this.state.question,
      answer: this.state.answer
    }).then( result => {
      if (result.data.hasOwnProperty('error')) {
        console.log(result.data.message)
        this.setState({
          response: result.data.message
        }, this.createNotification('error'))
      } else {
      localStorage.setItem('mernToken', result.data.token)
      this.props.liftToken(result.data)
      this.setState({
        response: 'Account created and logged in. Welcome to ORCA.'
      }, this.createNotification('success'))
      this.props.history.push("/profile");
    }
    }).catch( err => this.setState({
      response: err.message
    }, this.createNotification('error')) )
  }

  render() {
    return (
      <Signup handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}
              {...this.state}
      />
    )
  }
}

export default withRouter(SignupContainer);
