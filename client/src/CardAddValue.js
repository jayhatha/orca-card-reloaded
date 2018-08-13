import React from 'react';
import PaymentWidget from './PaymentWidget';
import TextField from '@material-ui/core/TextField';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const CardAddValue = props => {
    return (
      <div className="addvalue-container">
        <NotificationContainer />
       <h2>Add Money To Your Card</h2>
       <h3>Card No. {props.card.id}</h3>
       <h3>Current Balance: <span>${props.card.balance}</span></h3>
       <div className="flex-amount">
        <h4>Amount to Add:</h4>
        <span>$</span><TextField
              name="inputBalance"
              form="amount-form"
              type="number"
              className="amount-input"
              value={props.inputBalance}
              onChange={props.handleInputChange}
              margin="normal"
              required
          />
        </div>
        <form id="amount-form" className="add-amount-form" onSubmit={props.handleSubmitValue}>
          <p>You can add a minimum of $5, and a maximum of $300.</p>
          <PaymentWidget/>
          <button id="button" type="submit">Add Value</button>
          </form>
      </div>
    )
}

export default CardAddValue
