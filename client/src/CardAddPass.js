import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import PaymentWidget from './PaymentWidget'

class CardAddPass extends Component {
  constructor(props) {
    super(props)
  }

  getMonth() {
    var d = new Date();
    var month = new Array();
    month[0] = "JAN";
    month[1] = "FEB";
    month[2] = "MAR";
    month[3] = "APR";
    month[4] = "MAY";
    month[5] = "JUN";
    month[6] = "JUL";
    month[7] = "AUG";
    month[8] = "SEP";
    month[9] = "OCT";
    month[10] = "NOV";
    month[11] = "DEC";
    var n = month[d.getMonth()];
    var y = d.getFullYear().toString().split('').splice(2, 2).join('')
    return n + y
  }

  render() {
    let warning
    let submitAction
    let paymentForm

    if (this.props.showForm) {
      paymentForm = <PaymentWidget />
    }

    if (this.props.warning) {
      warning = <div id='confirmPass'> <h2>Your card already has a pass — do you want to replace it with a new one?</h2> <button id='button' type='submit'>Yes</button> <button id='button' type='button' onClick={this.props.clearWarning}>Cancel</button> </div>
      this.props.showForm ? submitAction = this.props.handleSubmit : submitAction = this.props.showPaymentForm
    } else {
      warning = <button id="button" type="submit">Add Pass</button>
      if (!this.props.showForm) {
      submitAction = this.props.checkForExistingPass
    } else {
      submitAction = this.props.handleSubmit
    }
    }

    return (
      <div className="form-container">
       <h2>Add a Pass To Your Orca Card</h2>
       <h3>Current Passes:</h3><span>{this.props.card.pass}</span>
       <form id='passSelect' onSubmit={submitAction}>
       <label>
       <h3>Pass to Add:</h3>
        <select form="passSelect" name="pass" id="pass" value={this.props.pass} onChange={this.props.handleInputChange}>
            <option value='All-Day PugetPass $3.50'>All-Day PugetPass $3.50 ($8.00)</option>
            <option value={"PugetPass " + this.getMonth() + " $2.75"}>PugetPass $2.75 ($99.00)</option>
            <option value={"PugetPass " + this.getMonth() + " $3.25"}>PugetPass $3.25 ($117.00)</option>
            <option value={"PugetPass " + this.getMonth() + " $4.50"}>PugetPass $4.50 ($162.00)</option>
            <option value={"PugetPass " + this.getMonth() + " $5.25"}>PugetPass $5.25 ($189.00)</option>
            <option value={"PugetPass " + this.getMonth() + " $10.00"}>PugetPass $10.00 ($360.00)</option>
            <option value="'WSF Vashon Island Ferry ' + this.getMonth()">WSF Vashon Island Ferry $10.00 ($360.00)</option>
        </select>
        </label>
        <br />
        {paymentForm}
        {warning}
        </form>

      </div>
    )
  }
}

export default withRouter(CardAddPass)
