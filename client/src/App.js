import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser} from './actions/index';
import './App.css';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignupContainer';
import Navbar from './Navbar';
import ProfileContainer from './ProfileContainer';
import GetCardContainer from './GetCardContainer';
import Footer from './Footer';
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from './store';

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (userData) => {
      dispatch(updateUser(userData))
    }
  }
}

const mapStatetoProps = state => {
  console.log('mapping state: ', state.user)
  return {
    user: state.user
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.checkForLocalToken = this.checkForLocalToken.bind(this);
    this.logout = this.logout.bind(this);
    this.liftTokenToState = this.liftTokenToState.bind(this);
  }

  liftTokenToState(data) {
    this.props.updateUser(data);
    console.log("Store is: ")
    console.log(store.getState())
  }

  logout() {
    // remove token from local storage
    localStorage.removeItem('mernToken');
    // remove info from state
    this.props.updateUser(null);
  }

  checkForLocalToken() {
    //Look for token in local storage
    let token = localStorage.getItem('mernToken');
    if (!token) {
      // There was no token
      // remove mernToken from local storage just in case corrupted, replaced etc
      localStorage.removeItem('mernToken')
      this.props.updateUser(null);
    } else {
      // token found in local storage
      // send it to the back to be verified
      axios.post('/auth/me/from/token', {
        token
      }).then( results => {
        // put the token in local storage
        localStorage.setItem('mernToken', results.data.token);
        this.props.updateUser(results.data);
        }).catch( err => console.log(err))
    }
  }


  fetchUserData() {
    axios.get('/user/data', {
    params: {
      email: this.props.user.email
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  componentDidMount() {
    this.checkForLocalToken();

  }

  render() {
    console.log('props = ', this.props)
    return(
      <Router>
        <div className="App">
          <Navbar user={this.props.user} logout={this.logout}/>
          <Route exact path="/signup" component = {() => <SignupContainer liftToken={this.liftTokenToState} />} />
          <Route exact path="/login" component = {() => <LoginContainer liftToken={this.liftTokenToState} />} />
          <Route exact path="/profile" component = {() => <ProfileContainer user={this.props.user} />} />
          <Route exact path="/getcard" component = {() => <GetCardContainer/>} />
          <Footer className="footer"/>
        </div>
      </Router>
    )
  }
}

const ConnectedApp = connect(
  mapStatetoProps, mapDispatchToProps)(App)

export default ConnectedApp;
