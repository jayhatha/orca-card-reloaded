import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Signup = props => {
  return (
    <div className="form-container">
        <div className="signup-header">
          <h4>Sign up now to get all the benefits of Orca!</h4>
        </div>
        <form onSubmit={props.handleSubmit}>
          <TextField
            id="name"
            name="name"
            type="text"
            label="Name"
            className="inputField"
            value={props.name}
            onChange={props.handleInputChange}
            margin="normal"
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
          /><br />
          <Button variant="contained" color="primary" type="submit" value="Sign up">Sign up</Button>
        </form>
        <p className="alert-msg">{(props.response) ? props.response.message : ''}</p>
      </div>
  )
}

export default Signup;
