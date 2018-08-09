import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const CardAutoReload = props => {
    return (
      <div className="form-container">
        <h3>Current Auto Reload is: {props.card.auto_reload}</h3>
        <h3>Change Auto Reload Amount:</h3>
        <form onSubmit={props.handleSubmitAutoReload}>
          <TextField
              name="reloadValue"
              type="number"
              className="inputField"
              value={props.reloadValue}
              onChange={props.handleInputChange}
              margin="normal"
              required
            />
          <button id="button" type="submit">Enable Auto-Reload</button>
        </form>
      </div>
    )
}

export default CardAutoReload
