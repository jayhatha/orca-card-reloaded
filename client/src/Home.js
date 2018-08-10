import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Home = props => {
  var goToRoute = props.user.first ? "/profile" : "/login"

  return (
    <div className="home">
      <h1>Welcome to Orca!</h1>
      <p>This is info about Orca.</p>
      <div class="have-card">
        <h3>Have an Orca Card?</h3>
        <Link id="button" component={Link} to={goToRoute} className="button">Go To My Cards</Link>
      </div>
      <div>
        <h3>Need a Card?</h3>
        <Link id="button" component={Link} to="/getcard" className="button">Get a Card</Link>
      </div>
    </div>
  );
}

export default Home
