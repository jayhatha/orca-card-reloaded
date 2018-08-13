import React from 'react';

const PaymentWidget = props => {
    return (
      <div className="payment-container">
        <h3>Payment Details</h3>
          <label>
            Full Name
            <input
              name="name"
              type="text"
              className="large-input"
              margin="normal"
              required
            />
          </label>
          <label>
            Card Number
            <input
              name="card-number"
              type="number"
              className="large-input"
              margin="normal"
              required
            />
          </label>
          <div className="card-flex">
            <div>
              <p>Expiration Date</p>
              <input
                name="month"
                type="number"
                className="small-input"
                placeholder="mm"
                margin="normal"
                required
              />
              <input
                name="year"
                type="number"
                className="small-input"
                placeholder="yy"
                margin="normal"
                required
              />
            </div>
            <div>
                <p>CVV</p>
                <input
                  name="cvv"
                  type="number"
                  className="cvv-input"
                  margin="normal"
                  required
                />
            </div>
          </div>
      </div>
    )
}

export default PaymentWidget
