import React from 'react';

const ProfileInfo = props => {
  return (
    <div><h1>Hi, {props.user.first}!</h1>
    <p>Address:</p>
    <ul>
      <li>{props.user.street}</li>
      <li>{props.user.city}, {props.user.state} {props.user.zip}</li>
    </ul>
  </div>

  );
};

export default ProfileInfo;
