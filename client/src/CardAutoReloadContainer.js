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
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmitAutoReload = e => {
    e.preventDefault();
    var newReload = parseInt(this.state.reloadValue)
    axios.post('/card/auto_reload', {
      id: this.props.card.id,
      auto_reload: newReload
    }).then( result => {
      this.props.updateAutoReload(newReload)
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
                        />
      </div>
    )
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CardAutoReloadContainer))