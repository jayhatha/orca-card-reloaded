import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password,
    response: state.response
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: () => {
      dispatch()
    }
  }
}

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   email: '',
    //   password: '',
    //   response: null
    // }
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
    axios.post('/auth/login', {
      email: this.props.email,
      password: this.props.password
    }).then( result => {
      if (result.data.hasOwnProperty('error')) {
        this.setState({
          response: result.data
        })
      } else {
        localStorage.setItem('mernToken', result.data.token)
        this.props.liftToken(result.data);
        this.setState({
          response: null,
        })
        // Redirect to home here...
        this.props.history.push("/");
      }
    })
  }

  render() {
    return (
      <Login handleInputChange={() => this.handleInputChange}
             handleSubmit={() => this.handleSubmit}
             email={this.props.email}
             password={this.props.password}
             response={this.props.response}
      />
    )
  }
}

const ConnectedLogin = connect(
  mapStateToProps,
  null
)(LoginContainer)

export default withRouter(ConnectedLogin)
