import React, { Component } from 'react';
import Button from "@material-ui/core/Button"
import CardAddValue from './CardAddValue';
import CardAutoReload from './CardAutoReload';
import axios from 'axios';
import store from './store';
import { Link } from 'react-router-dom';
import { updateCard, updateBalance, updateAutoReload} from './actions/index';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapStatetoProps = state => {
  return {
    user: state.user,
    card: state.card
  }
}

class CardBalanceContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Add Value To Your Orca Card</h2>
        <h3>{this.props.user.first}'s Card: {this.props.card.id}</h3>
        <h3>Current Balance: <span>${this.props.card.balance}</span></h3>
        <Button id="button" component={Link} to="/reload/addvalue">Add Value</Button>
        <hr/>
        {this.props.card.auto_reload ? (
          <div>
            <h3>Auto-Reload is: <span>Enabled</span></h3>
            <h3>Current Amount: ${this.props.card.auto_reload ? this.props.card.auto_reload : 0}</h3>
            <Button id="button" component={Link} to="/reload/auto-reload">Update Auto-Reload</Button>
          </div>
          ) : (
          <div>
            <h3>Auto-Reload is: <span>Disabled</span></h3>
            <Button id="button" component={Link} to="/reload/auto-reload" id="button">Enable Auto-Reload</Button>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(connect(mapStatetoProps, null)(CardBalanceContainer))