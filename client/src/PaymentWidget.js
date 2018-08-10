import React from 'react';
import TextField from '@material-ui/core/TextField';

const PaymentWidget = props => {
    return (
      <div className="payment-container">
        <h3>Payment Details</h3>
        <form>
          <label>Name as it appears on card</label>
          <input
              name="name"
              type="text"
              className="inputField"
              margin="normal"
              required
            />
            <TextField
              name="card-number"
              label="Card Number"
              type="number"
              className="inputField"
              margin="normal"
              required
            />
            <label>
              <p>Expiration Date</p>
              <select>
                <option value="0">Month</option>
                <option value="1">01 January</option>
                <option value="2">02 February</option>
                <option value="3">03 March</option>
                <option value="4">04 April</option>
                <option value="5">05 May</option>
                <option value="6">06 June</option>
                <option value="7">07 July</option>
                <option value="8">08 August</option>
                <option value="9">09 September</option>
                <option value="10">10 October</option>
                <option value="11">11 November</option>
                <option value="12">12 December</option>
              </select>
            </label>
            <select>
              <option value="0">Year</option>
              <option value="1">2018</option>
              <option value="1">2019</option>
              <option value="1">2020</option>
              <option value="1">2021</option>
              <option value="1">2022</option>
              <option value="1">2023</option>
              <option value="1">2024</option>
            </select>
            <TextField
              name="cvv"
              label="CVV"
              type="number"
              className="smallInput"
              margin="normal"
              required
            />
        </form>
      </div>
    )
}

export default PaymentWidget
