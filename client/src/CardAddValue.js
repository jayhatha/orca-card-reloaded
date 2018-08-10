import React from 'react';
import PaymentWidget from './PaymentWidget';
import TextField from '@material-ui/core/TextField';

const CardAddValue = props => {
    return (
      <div className="form-container">
       <h3>{props.user.first}'s Card: {props.card.id}</h3>
       <h3>Current Balance: <span>${props.card.balance}</span></h3>
       <h3>Amount to Add:</h3>
       <form onSubmit={props.handleSubmitValue}>
        <TextField
            name="inputBalance"
            type="number"
            className="smallInput"
            value={props.inputBalance}
            onChange={props.handleInputChange}
            margin="normal"
            required
          />
          <p>You can add a minimum of $5, and a maximum of $300.</p>
          <PaymentWidget/>
          <button id="button" type="submit">Add Value</button>
        </form>
      </div>
    )
}

export default CardAddValue
