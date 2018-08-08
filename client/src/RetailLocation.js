import React from 'react';

const RetailLocation = props => {
  return (
    <div className="retail-location">
      <hr/>
      <h4>{props.location.name}</h4>
      <p>{props.location.address}</p><span>{props.location.hours}</span>
      <hr/>
    </div>
  )
}

export default RetailLocation
