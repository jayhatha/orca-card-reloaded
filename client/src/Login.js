import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Login = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="text"
          className="inputField"
          value={props.email}
          onChange={props.handleInputChange}
          margin="normal"
          required
        /><br />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          className="inputField"
          value={props.password}
          onChange={props.handleInputChange}
          margin="normal"
          required
        /><br />
        <Button id="login-btn" variant="contained" color="primary" type="submit" value="Log In">Log In</Button>
      </form>
      <div id="login-link">
        <Link to={"/signup"}>Not a member? Sign up here.</Link>
      </div>
      <p className="alert-msg">{(props.response) ? props.response.message : ''}</p>
    </div>
  )
}

export default Login
