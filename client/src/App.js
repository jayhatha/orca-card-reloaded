import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import { connect, Provider } from 'react-redux';
import { updateUser, updateCard, resetUser } from './actions/index';
import './App.css';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignupContainer';
import Nav from './Navbar';
import Home from './Home';
import ProfileContainer from './ProfileContainer';
import GetCardContainer from './GetCardContainer';
import CardBalanceContainer from './CardBalanceContainer';
import CardPassContainer from './CardPassContainer';

import Footer from './Footer';
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from './store';

const mapDispatchToProps = {
  updateUser,
  updateCard,
  resetUser
}

const mapStatetoProps = state => {
  console.log('mapping state: ', state.user, state.card)
  return {
    user: state.user,
    card: state.card
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.checkForLocalToken = this.checkForLocalToken.bind(this);
    this.logout = this.logout.bind(this);
    this.liftTokenToState = this.liftTokenToState.bind(this);
    this.fetchCardData = this.fetchCardData.bind(this);
  }

  liftTokenToState(data) {
    this.props.updateUser(data);
    this.fetchCardData();
    console.log("Store is: ")
    console.log(store.getState())
  }

  logout() {
    // remove token from local storage
    localStorage.removeItem('mernToken');
    // remove info from the store
    this.props.resetUser();
  }

  checkForLocalToken() {
    //Look for token in local storage
    let token = localStorage.getItem('mernToken');
    if (!token) {
      // There was no token
      // remove mernToken from local storage just in case corrupted, replaced etc
      localStorage.removeItem('mernToken')
      this.props.resetUser();
    } else {
      // token found in local storage
      // send it to the back to be verified
      axios.post('/auth/me/from/token', {
        token
      }).then( results => {
        // put the token in local storage
        localStorage.setItem('mernToken', results.data.token);
        this.props.updateUser(results.data);
        this.fetchCardData();
        console.log("Store is: ")
        console.log(store.getState())
        }).catch( err => console.log(err))

    }
  }


fetchCardData() {
    axios.post('/user/cards', {
    id: this.props.user.id
  })
  .then( response => {
    this.props.updateCard(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  componentDidMount() {
    this.checkForLocalToken();
  }

  render() {
    return(
      <div>
      <Helmet>
            <meta charSet="utf-8" />
            <title>ORCA | One Pass for Puget Sound Buses, Trains, and Ferries</title>
      </Helmet>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav/>
            <Route exact path="/" component= {() => <Home user={this.props.user}/>} />
            <Route exact path="/signup" component = {() => <SignupContainer liftToken={this.liftTokenToState} />} />
            <Route exact path="/login" component = {() => <LoginContainer liftToken={this.liftTokenToState} />} />
            <Route exact path="/profile" component = {() => <ProfileContainer user={this.props.user} card={this.props.card} />} />
            <Route exact path="/getcard" component = {() => <GetCardContainer/>} />

            <Route exact path="/addpass" component = {() => <CardPassContainer/>} />
            <Route exact path="/reload" component = {() => <CardBalanceContainer/>} />
            <Footer className="footer"/>
          </div>
        </Router>
      </Provider>
    </div>
    )
  }
}

const ConnectedApp = connect(
  mapStatetoProps, mapDispatchToProps)(App)

export default ConnectedApp;
