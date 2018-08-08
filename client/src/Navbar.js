import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import { updateUser} from './actions/index';
import { connect } from 'react-redux';
import store from './store';

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (userData) => {
      dispatch(updateUser(userData))
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class Navbar extends Component {

  handleLogout = () => {
    // this.props.logout()

    // remove token from local storage
    localStorage.removeItem('mernToken');
    // remove info from the store
    this.props.updateUser(null);
  }

  render() {
    console.log("this.props.user.first = ", this.props.user.first)
    return (
      <div className="nav-flex">
        <div>
          <a href="/"><h4>ORCA</h4></a>
        </div>
        <div>
          {this.props.user.first ? (
            <div>
              <Link to="/profile">Profile</Link>
              <Link to="/" onClick={this.handleLogout}>Logout</Link>
            </div>
          ) : (
            <Link to="/login" onClick={this.handleClose}>Login</Link>
          )}
        </div>
      </div>
    );
  }
}

const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default Nav