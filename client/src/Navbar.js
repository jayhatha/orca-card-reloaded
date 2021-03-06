import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { updateUser, updateCard, resetUser} from './actions/index';
import { connect } from 'react-redux';
import logo from './assets/img/OrcaLogo.png';
import NavMenu from './NavMenu';

const mapDispatchToProps = {
  updateUser,
  updateCard,
  resetUser
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class Navbar extends Component {

  handleLogout = () => {
    // remove token from local storage
    localStorage.removeItem('mernToken');
    // remove info from the store
    this.props.resetUser();
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="nav-flex">
        <div>
          <Link to="/"><img alt="orca-logo" src={logo}/></Link>
        </div>
        <NavMenu user={this.props.user} logout={this.handleLogout}/>
      </div>
    );
  }
}

const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default withRouter(Nav)
