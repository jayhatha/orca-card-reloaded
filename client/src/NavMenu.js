import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

class NavMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  // Call logout function passed as props and close menu
  handleLogoutAndClose = () => {
    this.setState({ anchorEl: null })
    this.props.logout()
  }

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className="menu"
        >
          Menu
        </button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        {this.props.user.first ? (
          <div>
            <MenuItem component={Link} to="/profile" onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem component={Link} to="/reload" onClick={this.handleClose}>Reload</MenuItem>
            <MenuItem onClick={this.handleLogoutAndClose}>Logout</MenuItem>
          </div>
          ) : (
          <div>
            <MenuItem component={Link} to="/login" onClick={this.handleClose}>Log In</MenuItem>
            <MenuItem component={Link} to="/signup" onClick={this.handleClose}>Sign Up</MenuItem>
          </div>
        )}
        </Menu>
      </div>
    );
  }
}

export default NavMenu;
