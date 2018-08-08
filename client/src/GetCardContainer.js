import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import RetailLocation from './RetailLocation';
import Button from '@material-ui/core/Button';
import ReactMapboxGl, {Marker} from "react-mapbox-gl";
import locations from './retailLocationData';

class GetCardContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Initialize Mapbox map
    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MAPBOX
    })

    const retailList = locations.map(location => {
      return(<RetailLocation location={location}/>)
    })

    let markerArray = locations.map(location => {
      return (<div>
              <Marker
                coordinates={[location.lng, location.lat]}
                anchor="bottom">
                <img id='map-icon' alt='icon-logo for webpage' src='http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png'/>
              </Marker>
              </div>)
    })

    return (
      <div>
        <div>
          <h4>Get a card online</h4>
          <Button id="button" component={Link} to="/signup" className="button">SIGN UP</Button>
        </div>
        <div>
          <h4>Get a card at a retail location</h4>
        </div>
        <div className="map-wrapper">
          <Map
            style="mapbox://styles/scottammon/cjjfwon001qvd2rthricow465"
            center={[-122.334020, 47.609676]}
            zoom={[9]}
            containerStyle={{
              height: "30vh"
            }}>
            {markerArray}
          </Map>
        </div>
        <div class="retail-container">
          {retailList}
        </div>
      </div>
    )
  }
}

export default withRouter(GetCardContainer)
