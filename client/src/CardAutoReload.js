import React, { Component } from 'react';
import PaymentWidget from './PaymentWidget';
import TextField from '@material-ui/core/TextField';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class CardAutoReload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      autoEnabled: false
    }
    this.enableAutoLoad = this.enableAutoLoad.bind(this)
  }

  enableAutoLoad() {
    this.setState({
      autoEnabled: true
    })
  }

  render() {
    return (
      <div class="form-container">
        <NotificationContainer />
        <h3>Current Auto-Reload Amount: ${this.props.card.auto_reload ? this.props.card.auto_reload : 0}</h3>
        <form onSubmit={this.props.handleSubmitAutoReload}>
          <h3>New Amount:</h3>
          <TextField
              name="reloadValue"
              type="number"
              className="inputField"
              value={this.props.reloadValue}
              onChange={this.props.handleInputChange}
              margin="normal"
              required
            />
            <PaymentWidget/>
            <button type="submit" id="button">Update Auto-Reload</button>
        </form>
        <form onSubmit={this.props.handleSubmitDisableReload}>
          <button type="submit" id="button">Disable Auto-Reload</button>
        </form>
      </div>
    )
  }
}

export default CardAutoReload
