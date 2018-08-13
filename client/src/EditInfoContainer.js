import React, {Component} from 'react';
import EditInfo from './EditInfo';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager} from 'react-notifications';
import { updateProfile } from './actions/index';

const mapDispatchToProps = {
  updateProfile
}

const mapStatetoProps = state => {
  return {
    user: state.user,
    card: state.card
  }
}

class EditInfoContainer extends Component {
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
      email: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createNotification = this.createNotification.bind(this);
    }

    createNotification = (type) => {
      return () => {
        switch (type) {
          case 'success':
            NotificationManager.success(this.state.response, 'Success!', 2500);
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
    axios.post('/user/edit', {
      id: this.props.user.id,
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
    }).then( result => {
      if (result.data.hasOwnProperty('error')) {
        this.setState({
          response: result.data.message
        }, this.createNotification('error'))
      } else {
      this.setState({
        response: 'Your information has been updated.'
      }, this.createNotification('success'))
      console.log(result.data.user)
      this.props.updateProfile(result.data);
      this.props.history.push("/profile");
    }
    }).catch( err => this.setState({
      response: err.message
    }, this.createNotification('error')) )
  }

  render() {
    return (
      <EditInfo handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}
              {...this.state}
      />
    )
  }
}
const ConnectedEditInfo = connect(mapStatetoProps, mapDispatchToProps)(EditInfoContainer)

export default withRouter(ConnectedEditInfo);
