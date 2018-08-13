import React from 'react';
import TextField from '@material-ui/core/TextField';

const EditInfo = props => {
  return (
    <div className="form-container">
        <div className="signup-header">
          <h4>Make Changes to Your Personal Info</h4>
        </div>
        <form id="signupForm" onSubmit={props.handleSubmit}>
          <div className="signup-section">
            <h3>Cardholder Details</h3>
            <TextField
              id="first"
              name="first"
              type="text"
              label="First Name"
              className="inputField"
              value={props.first}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
            <TextField
              id="last"
              name="last"
              type="text"
              label="Last Name"
              className="inputField"
              value={props.last}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
            <p className="fade-title">Date of Birth:</p>
            <TextField
              id="dob"
              name="dob"
              type="date"
              className="inputField"
              value={props.dob}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
          </div>
          <div className="signup-section">
            <h3>Contact Details</h3>
            <TextField
              id="phone"
              name="phone"
              type="text"
              label="Phone"
              className="inputField"
              value={props.phone}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
            <TextField
              id="email"
              name="email"
              type="text"
              label="Email"
              className="inputField"
              value={props.email}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
          </div>
          <div className="signup-section">
            <h3>Address</h3>
            <TextField
              id="street"
              name="street"
              type="text"
              label="Street"
              className="inputField"
              value={props.street}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
            <TextField
              id="city"
              name="city"
              type="text"
              label="City"
              className="inputField"
              value={props.city}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
            <TextField
              id="state"
              name="state"
              type="text"
              label="State"
              className="inputField"
              value={props.state}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
            <TextField
              id="zip"
              name="zip"
              type="text"
              label="Zipcode"
              className="inputField"
              value={props.zip}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
          </div>

          <button className="edit-button" id="button" type="submit" value="Edit Info">Save</button>
        </form>
          <button onClick="" className="cancel" id="button" type="button" value="Cancel">Cancel</button>
      </div>
  )
}

export default EditInfo;
