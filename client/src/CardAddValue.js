import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const CardAddValue = props => {
    return (
      <div className="form-container">
       <h2>Add Value To Your Orca Card</h2>
       <h3>{props.user.first}'s Card: {props.card.id}</h3>
       <h3>Current Balance:</h3><span>{props.card.balance}</span>
       <h3>Amount to Add:</h3>
       <form onSubmit={props.handleSubmitValue}>
        <TextField
            name="inputBalance"
            type="number"
            className="inputField"
            value={props.inputBalance}
            onChange={props.handleInputChange}
            margin="normal"
            required
          />
          <p>You can add a minimum of $5, and a maximum of $300.</p>
        <button id="button" type="submit">Add Value</button>
        </form>
      </div>
    )
}

export default CardAddValue
