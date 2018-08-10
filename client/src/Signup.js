import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

const Signup = props => {
  return (
    <div className="form-container">
        <div className="signup-header">
          <h4>Sign up now to get all the benefits of Orca!</h4>
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
          <div className="signup-section">
            <h3>My ORCA Login Details</h3>
        <label>
         Choose a secret question:
         <select form="signupForm" name="question" id="question" value={props.question} onChange={props.handleInputChange}>
           <option value="What street did you live on in second grade?">What street did you live on in second grade?</option>
           <option value="In what city did you meet your spouse/significant other?">In what city did you meet your spouse/significant other?</option>
           <option value="What was the last name of your third grade teacher?">What was the last name of your third grade teacher?</option>
         </select>
         </label>
            <TextField
              id="answer"
              name="answer"
              type="text"
              label="Answer"
              className="inputField"
              value={props.answer}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
            <TextField
              id="username"
              name="username"
              type="text"
              label="Username"
              className="inputField"
              value={props.username}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className="inputField"
              value={props.password}
              onChange={props.handleInputChange}
              margin="normal"
              required
            /><br />
          </div>
          <button className="signup-button" id="button" type="submit" value="Sign up">Sign Up</button>
        </form>
        <p className="alert-msg">{(props.response) ? props.response.message : ''}</p>
      </div>
  )
}

export default Signup;
