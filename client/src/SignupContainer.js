import React, {Component} from 'react';
import Signup from './Signup';
import axios from 'axios';

class Signup extends Component {
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
      answer: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  // Handles changes to email and password fields
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
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
      localStorage.setItem('mernToken', result.data.token)
      this.props.liftToken(result.data)
    }).catch( err => console.log(err) )
  }

  render() {
    return (
      <Signup handleInputChange={() => this.handleInputChange}
              {...this.state}
      />
    )
  }
}

export default SignupContainer;
