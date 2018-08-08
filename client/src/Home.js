import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <h3>Welcome to Orca!</h3>
        <div class="have-card">
          <h4>Have an Orca Card?</h4>
          <button className="button">GO TO MY CARDS</button>
        </div>
        <div>
          <h4>Need a Card?</h4>
          <button className="button">GET A CARD</button>
        </div>
      </div>
    );
  }
}

export default Home