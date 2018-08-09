import React, { Component } from 'react';
import CardAddPass from './CardAddPass';
import axios from 'axios';
import store from './store';
import { updateCard, updatePass} from './actions/index';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

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
    pass: 'All-Day PugetPass $3.50'
  }

  this.handleInputChange = this.handleInputChange.bind(this)
  this.handleSubmitPass = this.handleSubmitPass.bind(this)
}

handleInputChange = e => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({
    [name]: value
  });
}

handleSubmitPass = e => {
  e.preventDefault();
  var newPass = this.state.pass;
  axios.post('/card/addpass', {
    id: this.props.card.id,
    pass: newPass
  }).then( result => {
    // this.props.addPass(newPass)
    this.props.history.push("/profile");
  })
}



  render() {
    return(
      <CardAddPass user={this.props.user} card={this.props.card} pass={this.state.pass} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmitPass} />
    )
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CardPassContainer))
