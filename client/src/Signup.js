import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SimpleSelect from './SimpleSelect';

const Signup = props => {
  const { classes } = props;

  return (
    <div className="form-container">
        <div className="signup-header">
          <h4>Sign up now to get all the benefits of Orca!</h4>
        </div>
        <form onSubmit={props.handleSubmit}>
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
          <p>Date of Birth:</p>
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
          <p>Address</p>
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
          <p>Choose a secret question:</p>
          <SimpleSelect></SimpleSelect><br />
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
          <Button variant="contained" color="primary" type="submit" value="Sign up">Sign up</Button>
        </form>
        <p className="alert-msg">{(props.response) ? props.response.message : ''}</p>
      </div>
  )
}

export default Signup;
