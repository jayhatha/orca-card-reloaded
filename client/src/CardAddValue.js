import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

const CardAddValue = props => {
    console.log('props are: ', props)
    return (
      <div className="form-container">
       <h2>Add Value To Your Orca Card</h2>
       <h3>{props.user.first}'s Card: {props.card.id}</h3>
       <h3>Current Balance:</h3><span>{props.card.balance}</span>
       <h3>Amount to Add:</h3>
       <form onSubmit={props.handleSubmit}>
        <TextField
            name="balance"
            type="text"
            className="inputField"
            value={props.user.balance}
            onChange={props.handleInputChange}
            margin="normal"
            required
          />
        <button id="button">Add Value</button>
        </form>
      </div>
    )
}

export default withRouter(CardAddValue)
