import React, { Component } from 'react';
import CardAddValue from './CardAddValue';
import axios from 'axios';
import store from './store';
import { updateBalance } from './actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const mapDispatchToProps = {
  updateBalance
}

const mapStatetoProps = state => {
  return {
    user: state.user,
    card: state.card
  }
}

class CardAddValueContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputBalance: 5,
      response: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitValue = this.handleSubmitValue.bind(this)
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
          console.log('firing createNotification');
          NotificationManager.error(this.state.response, 'Error', 2500);
          break;
      }
    };
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmitValue = e => {
    e.preventDefault();
    var newBalance = parseInt(this.props.card.balance) + parseInt(this.state.inputBalance);
    axios.post('/card/addvalue', {
      id: this.props.card.id,
      balance: newBalance
    }).then( result => {
      this.setState({
        response: 'You\'ve added funds to your card!'
      }, this.createNotification('success'))
      this.props.updateBalance(newBalance)
      this.props.history.push("/profile");
    })
  }

  render() {
    return (
      <div>
        <CardAddValue user={this.props.user}
                      card={this.props.card}
                      inputBalance={this.state.inputBalance}
                      handleInputChange={this.handleInputChange}
                      handleSubmitValue={this.handleSubmitValue}
        />
      </div>
    )
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CardAddValueContainer))
