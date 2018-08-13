import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  var goToRoute = props.user.first ? "/profile" : "/login"

  return (
    <div className="background-wrapper">
      <div className="home">
        <h1>Welcome to ORCA</h1>
        <p>The ORCA card is all you need to pay your fare on Sound Transit, 
          Community Transit, Everett Transit, King County Metro, Kitsap Transit, 
          Pierce Transit, Seattle Street Car, the King County Water Taxi, 
          and Washington State Ferries. If you need more than one bus or train 
          to get to your destination, the ORCA card automatically calculates the transfer!</p>
        <div class="have-card">
          <h3>Have an ORCA Card?</h3>
          <Link id="button" component={Link} to={goToRoute} className="button">Go To My Cards</Link>
        </div>
        <div class="need-card">
          <h3>Need a Card?</h3>
          <Link id="button" className="get-a-card" component={Link} to="/getcard" className="button">Get a Card</Link>
        </div>
      </div>
    </div>
  );
}

export default Home
