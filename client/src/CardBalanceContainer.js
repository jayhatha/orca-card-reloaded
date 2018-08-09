import React, { Component } from 'react';
import CardAddValue from './CardAddValue';
import axios from 'axios';
import store from './store';
import { updateCard} from './actions/index';
import { connect } from 'react-redux';

const mapDispatchToProps = {
  updateCard
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
    this.handleSubmitValue = this.handleSubmitValue.bind(this)
    this.handleSubmitAutoReload = this.handleSubmitAutoReload.bind(this)
  }

  handleSubmitValue() {

  }

  handleSubmitAutoReload() {

  }

  render() {
    return (
      <div>
        <CardAddValue user={this.props.user} card={this.props.card}/>
      </div>
    )
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CardBalanceContainer)