import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import RetailLocation from './RetailLocation';
import Button from '@material-ui/core/Button';
import ReactMapboxGl, {Marker, Popup} from "react-mapbox-gl";


class GetCardContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Initialize Mapbox map
    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MAPBOX
    })

    const location = {
      name: "QFC",
      address: "123 Mercer St., Seattle WA 98109"
    }

    return (
      <div>
        <div>
          <h4>Get a card online</h4>
          <Button variant="contained" color="primary">Sign up</Button>
        </div>
        <div>
          <h4>Get a card at a retail location</h4>
        </div>
        <div className="map-wrapper">
          <Map
            style="mapbox://styles/scottammon/cjjfwon001qvd2rthricow465"
            center={[-122.334020, 47.609676]}
            zoom={[11]}
            containerStyle={{
              height: "30vh"
            }}>
           
          </Map>
        </div>
        <div>
          <RetailLocation location={location}/>
        </div>
      </div>
    )
  }
}

export default withRouter(GetCardContainer)
