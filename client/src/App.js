import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { NotificationContainer } from 'react-notifications';
import { connect, Provider } from 'react-redux';
import { updateUser, updateCard, resetUser } from './actions/index';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import store from './store';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignupContainer';
import ProfileContainer from './ProfileContainer';
import GetCardContainer from './GetCardContainer';
import CardBalanceContainer from './CardBalanceContainer';
import CardPassContainer from './CardPassContainer';
import CardAddValueContainer from './CardAddValueContainer';
import CardAutoReloadContainer from './CardAutoReloadContainer';
import Nav from './Navbar';
import Home from './Home';
import Footer from './Footer';
import ContactInfo from './ContactInfo';
import ErrorPage from './ErrorPage';

const mapDispatchToProps = {
  updateUser,
  updateCard,
  resetUser
}

const mapStatetoProps = state => {
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
            <NotificationContainer />
            <Switch>
              <Route exact path="/" component= {() => <Home user={this.props.user}/>} />
              <Route path="/signup" component = {() => <SignupContainer liftToken={this.liftTokenToState} />} />
              <Route path="/login" component = {() => <LoginContainer liftToken={this.liftTokenToState} />} />
              <Route path="/profile" component = {() => this.props.user.id ? <ProfileContainer user={this.props.user} card={this.props.card} /> : <LoginContainer liftToken={this.liftTokenToState} />} />
              <Route path="/getcard" component = {() => <GetCardContainer/>} />
              <Route path="/addpass" component = {() => this.props.user.id ? <CardPassContainer/> : <LoginContainer liftToken={this.liftTokenToState} />} />
              <Route exact path="/reload" component = {() => this.props.user.id ? <CardBalanceContainer/> : <LoginContainer liftToken={this.liftTokenToState} />} />
              <Route exact path="/reload/addvalue" component = {() => this.props.user.id ? <CardAddValueContainer/> : <LoginContainer liftToken={this.liftTokenToState} />} />
              <Route exact path="/reload/auto-reload" component = {() => this.props.user.id ? <CardAutoReloadContainer/> : <LoginContainer liftToken={this.liftTokenToState} />} />
              <Route path="/contact" component = {() => <ContactInfo/>} />
              <Route component = {() => <ErrorPage/>} />
            </Switch>
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
