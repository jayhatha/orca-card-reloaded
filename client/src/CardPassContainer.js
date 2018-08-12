import React, { Component } from 'react';
import CardAddPass from './CardAddPass';
import axios from 'axios';
import store from './store';
import { updateCard, updatePass } from './actions/index';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const mapDispatchToProps = {
  updateCard,
  updatePass
}

const mapStatetoProps = state => {
  return {
    user: state.user,
    card: state.card
  }
}

class CardPassContainer extends Component {

constructor(props) {
  super(props)
  this.state = {
    hasPass: false,
    pass: 'All-Day PugetPass $3.50',
    warning: '',
    showForm: false
  }

  this.handleInputChange = this.handleInputChange.bind(this)
  this.handleSubmitPass = this.handleSubmitPass.bind(this)
  this.checkForExistingPass = this.checkForExistingPass.bind(this)
  this.clearWarning = this.clearWarning.bind(this)
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
        console.log('firing createNotification');
        NotificationManager.error(this.state.response, 'Error', 2500);
        break;
    }
  };
};

componentDidMount() {
  this.setState({
    hasPass: this.props.card.pass ? true : false
})
}

handleInputChange = e => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({
    [name]: value
  });
}

checkForExistingPass = e => {
  e.preventDefault();
  let message = "<div id='confirmPass'> <h2>Your card already has a pass — do you want to replace it with a new one?</h2> <button id='button' type='submit'>Yes</button> <button id='button' type='submit'>Cancel</button> </div>"
  if (this.state.hasPass) {
    this.setState({
      warning: true
    });
  } else {
    this.state.showForm ? this.handleSubmitPass() : this.showPaymentForm()
  }

}

clearWarning = () => {
  this.setState({
    warning: false
  }, this.props.history.push("/profile"));
}

showPaymentForm = e => {
  if (e) {
  e.preventDefault();
  }
  this.setState({
    showForm: true,
    warning: false
  });
}

handleSubmitPass = e => {
  if (e) {
  e.preventDefault();
  }
  console.log('submitting pass')
  var newPass = this.state.pass;
  axios.post('/card/addpass', {
    id: this.props.card.id,
    pass: newPass
  }).then( result => {
    this.setState({
      response: 'Your pass has been added to your card.'
    }, this.createNotification('success'))
    this.props.updatePass(newPass)
    this.props.history.push("/profile");
  })
}



  render() {
    return(
      <CardAddPass user={this.props.user} card={this.props.card} pass={this.state.pass} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmitPass} checkForExistingPass={this.checkForExistingPass} warning={this.state.warning} clearWarning={this.clearWarning} showForm={this.state.showForm} showPaymentForm={this.showPaymentForm}/>
    )
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CardPassContainer))
