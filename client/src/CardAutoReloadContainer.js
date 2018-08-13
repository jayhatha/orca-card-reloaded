import React, { Component } from 'react';
import CardAutoReload from './CardAutoReload';
import axios from 'axios';
import store from './store';
import { updateAutoReload } from './actions/index';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

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
      reloadValue: 0,
      response: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitAutoReload = this.handleSubmitAutoReload.bind(this)
    this.handleSubmitDisableReload = this.handleSubmitDisableReload.bind(this)
    this.createNotification = this.createNotification.bind(this);
  }

  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success(this.state.response, 'Success!', 2500);
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          console.log('firing createNotification');
          NotificationManager.error(this.state.response, 'Error', 2500);
          break;
      }
    };
  };

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
<<<<<<< HEAD
      this.setState({
        response: 'You\'ve enabled auto-reload on this ORCA card.'
      }, this.createNotification('success'))
=======
      // Update new auto-reload value in the store
>>>>>>> a72ec5b602b5aa77397110b42853b7be275a87eb
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
<<<<<<< HEAD
      this.setState({
        response: 'You\'ve disabled auto-reload on this ORCA card.'
      }, this.createNotification('success'))
=======
      // Update auto-reload to null in the store
>>>>>>> a72ec5b602b5aa77397110b42853b7be275a87eb
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
