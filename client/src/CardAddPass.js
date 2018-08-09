import React, { Component } from 'react';
import PassSelect from './PassSelect';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

class CardAddPass extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="form-container">
       <h2>Add a Pass To Your Orca Card</h2>
       <h3>Current Passes:</h3><span>{this.props.card.pass}</span>
       <h3>Pass to Add:</h3>
       <form onSubmit={this.props.handleSubmit}>
         <PassSelect></PassSelect><br />
        </form>
      </div>
    )
  }
}

export default withRouter(CardAddPass)
