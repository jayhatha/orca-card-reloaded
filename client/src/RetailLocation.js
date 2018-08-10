import React from 'react';

const RetailLocation = props => {
  return (
    <div className="retail-location">
      <hr/>
      <button id="map-button" onClick={() => props.setLatLng(props.location.lat, props.location.lng)}>{props.location.name}</button>
      <p>{props.location.address}</p><span>{props.location.hours}</span>
    </div>
  )
}

export default RetailLocation
