import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

class CardAddValue extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="form-container">
       <h2>Add Value To Your Orca Card</h2>
       <h3>Current Balance:</h3><span>{this.props.user.balance}</span>
       <h3>Amount to Add:</h3>
       <form onSubmit={this.props.handleSubmit}>
        <TextField
            name="balance"
            type="text"
            className="inputField"
            value={props.user.balance}
            onChange={props.handleInputChange}
            margin="normal"
            required
          />
        </form>
      </div>
    )
  }
}

export default withRouter(CardAddValue)
