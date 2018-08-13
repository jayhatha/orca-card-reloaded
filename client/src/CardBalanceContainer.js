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
      <div className="manage-card-container">
        <div className="balance-container">
          <h2>Manage Your Orca Card</h2>
          <h4>Card No. {this.props.card.id}</h4>
          <h4>Current Balance: <span>${this.props.card.balance}</span></h4>
          <Link id="button" to="/reload/addvalue">Add Value</Link>
        </div>
        {this.props.card.auto_reload ? (
          <div>
            <h4>Auto-Reload is: <span>Enabled</span></h4>
            <h4>Current Amount: ${this.props.card.auto_reload ? this.props.card.auto_reload : 0}</h4>
            <Link id="button" to="/reload/auto-reload">Manage Auto-Reload</Link>
          </div>
          ) : (
          <div>
            <h4>Auto-Reload is: <span>Disabled</span></h4>
            <Link id="button" to="/reload/auto-reload" id="button">Enable Auto-Reload</Link>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(connect(mapStatetoProps, null)(CardBalanceContainer))
