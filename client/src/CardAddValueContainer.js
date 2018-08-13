import React, { Component } from 'react';
import CardAddValue from './CardAddValue';
import axios from 'axios';
import store from './store';
import { updateBalance } from './actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
      inputBalance: 5
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitValue = this.handleSubmitValue.bind(this)
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  // Axios call to post new card balance to database
  handleSubmitValue = e => {
    e.preventDefault();
    var newBalance = parseInt(this.props.card.balance) + parseInt(this.state.inputBalance);
    axios.post('/card/addvalue', {
      id: this.props.card.id,
      balance: newBalance 
    }).then( result => {
      // Send new database balance to the store
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