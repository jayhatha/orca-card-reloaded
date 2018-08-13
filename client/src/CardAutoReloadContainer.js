import React, { Component } from 'react';
import CardAutoReload from './CardAutoReload';
import axios from 'axios';
import store from './store';
import { updateAutoReload } from './actions/index';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapDispatchToProps = {
  updateAutoReload
}

const mapStatetoProps = state => {
  return {
    user: state.user,
    card: state.card
  }
}

class CardAutoReloadContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reloadValue: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitAutoReload = this.handleSubmitAutoReload.bind(this)
    this.handleSubmitDisableReload = this.handleSubmitDisableReload.bind(this)
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  // Axios post to update auto-reload in database
  handleSubmitAutoReload = e => {
    e.preventDefault();
    var newReload = parseInt(this.state.reloadValue)
    axios.post('/card/auto_reload', {
      id: this.props.card.id,
      auto_reload: newReload
    }).then( result => {
      // Update new auto-reload value in the store
      this.props.updateAutoReload(newReload)
      this.props.history.push("/profile");
    })
  }

  // Axios post to make auto-reload null in database
  handleSubmitDisableReload = e => {
    e.preventDefault();
    axios.post('/card/auto_reload', {
      id: this.props.card.id,
      auto_reload: null
    }).then( result => {
      // Update auto-reload to null in the store
      this.props.updateAutoReload(null)
      this.props.history.push("/profile");
    })
  }

  render() {
    return (
      <div>        
        <CardAutoReload user={this.props.user} 
                        card={this.props.card} 
                        reloadValue={this.state.reloadValue}
                        handleInputChange={this.handleInputChange}
                        handleSubmitAutoReload={this.handleSubmitAutoReload}
                        handleSubmitDisableReload={this.handleSubmitDisableReload}
        />
      </div>
    )
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CardAutoReloadContainer))