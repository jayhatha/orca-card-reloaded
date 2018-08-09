import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Home = props => {
  var goToRoute = props.user.first ? "/profile" : "/login"

  return (
    <div className="home">
      <h3>Welcome to Orca!</h3>
      <div class="have-card">
        <h4>Have an Orca Card?</h4>
        <Button id="button" component={Link} to={goToRoute} className="button">GO TO MY CARDS</Button>
      </div>
      <div>
        <h4>Need a Card?</h4>
        <Button id="button" component={Link} to="/getcard" className="button">GET A CARD</Button>
      </div>
    </div>
  );
}

export default Home