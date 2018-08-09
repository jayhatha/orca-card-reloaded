import React, { Component } from 'react';
import CardAddPass from './CardAddPass';
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

class CardPassContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <CardAddPass user={this.props.user} card={this.props.card} />
    )
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CardPassContainer))
