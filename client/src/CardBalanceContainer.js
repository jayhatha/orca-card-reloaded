import React, { Component } from 'react';
import CardAddValue from './CardAddValue';
import CardAutoReload from './CardAutoReload';
import axios from 'axios';
import store from './store';
import { updateCard, updateBalance, updateAutoReload} from './actions/index';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapDispatchToProps = {
  updateBalance,
  updateAutoReload
}

const mapStatetoProps = state => {
  return {
    user: state.user,
    card: state.card
  }
}

class CardBalanceContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputBalance: 5,
      reloadValue: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitValue = this.handleSubmitValue.bind(this)
    this.handleSubmitAutoReload = this.handleSubmitAutoReload.bind(this)
  }

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
      this.props.updateBalance(newBalance)
      this.props.history.push("/profile");
    })
  }

  handleSubmitAutoReload = e => {
    e.preventDefault();
    var newReload = parseInt(this.state.reloadValue)
    axios.post('/card/auto_reload', {
      id: this.props.card.id,
      auto_reload: newReload
    }).then( result => {
      this.props.updateAutoReload(newReload)
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
        <CardAutoReload user={this.props.user} 
                        card={this.props.card} 
                        reloadValue={this.state.reloadValue}
                        handleInputChange={this.handleInputChange}
                        handleSubmitAutoReload={this.handleSubmitAutoReload}
                        />
      </div>
    )
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CardBalanceContainer))