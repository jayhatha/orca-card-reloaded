import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import RetailLocation from './RetailLocation';
import ReactMapboxGl, {Marker, Popup} from "react-mapbox-gl";
import locations from './retailLocationData';
import marker from './assets/img/marker.png';

class GetCardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLat: 47.609676,
      currentLng: -122.334020
    }
    this.setLatLng = this.setLatLng.bind(this)
  }

  setLatLng = (lat, lng) => {
    this.setState({
      currentLat: lat,
      currentLng: lng
    })
  }

  render() {
    // Initialize Mapbox map
    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MAPBOX
    })

    const retailList = locations.map(location => {
      return(<RetailLocation location={location} setLatLng={this.setLatLng}/>)
    })

    let markerArray = locations.map(location => {
      return (<div>
                <Marker
                  coordinates={[location.lng, location.lat]}
                  anchor="bottom">
                  <img id='map-icon' alt='map marker' src={marker}/>
                </Marker>
                {location.lng === this.state.currentLng ? (
                  <Popup coordinates={[location.lng, location.lat]}
                         anchor="bottom"
                         offset={{'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]}}>
                    <p>{location.name}</p>
                  </Popup>
                ) : (
                  null
                )}
              </div>)
    })

    return (
      <div>
        <div>
          <h4>Get a card online</h4>
          <Link id="button" to="/signup" className="button">Sign Up</Link>
        </div>
        <div>
          <h4>Get a card at a retail location</h4>
        </div>
        <div className="map-wrapper">
          <Map
            style="mapbox://styles/scottammon/cjjfwon001qvd2rthricow465"
            center={[this.state.currentLng, this.state.currentLat]}
            zoom={[10]}
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
