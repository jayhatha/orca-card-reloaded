import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

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
      {this.props.card.auto_reload || this.state.autoEnabled ? (
        <div>
          <h3>Auto Reload is: <span>Enabled</span></h3>
          <h3>Current Amount: ${this.props.card.auto_reload ? this.props.card.auto_reload : 0}</h3>
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
              <button type="submit" id="button">Update Auto Reload</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>Auto Reload is: <span>Disabled</span></h3>
          <button onClick={this.enableAutoLoad} id="button">Enable Auto-Reload</button>
        </div>
      )}
      </div>
    )
  }
}

export default CardAutoReload
