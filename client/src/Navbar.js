import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  handleLogout = () => {
    this.props.logout()
  }

  render() {

    return (
      <div>
        <a href="/"><h4>ORCA</h4></a>
          {this.props.user.first ? (
            <div>
              <Link to="/profile">Profile</Link>
              <Link to="/" onClick={this.handleLogout}>Logout</Link>
            </div>
          ) : (
            <Link to="/login" onClick={this.handleClose}>Login</Link>
          )}
      </div>
    );
  }
}

export default Navbar;
