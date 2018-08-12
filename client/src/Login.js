import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Login = props => {

  return (
    <div className="form-container">
      <NotificationContainer />
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
        <button id="button" type="submit" value="Log In">Log In</button>
      </form>
      <div id="login-link">
        <Link className="signup-link" to={"/signup"}>Not a member? Sign up here.</Link>
      </div>
      <p className="alert-msg">{(props.response) ? props.response.message : ''}</p>
    </div>
  )
}

export default Login
