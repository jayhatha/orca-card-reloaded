import React from 'react';

const RetailLocation = props => {
  return (
    <div>
      <hr/>
      <h4>{props.location.name}</h4>
      <p>{props.location.address}</p>
      <hr/>
    </div>
  )
}

export default RetailLocation
