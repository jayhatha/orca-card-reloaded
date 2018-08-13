import React from 'react';
import { Link } from 'react-router-dom';

const ProfileInfo = props => {
  return (
    <div><h1>Hi, {props.user.first}!</h1>
    <ul>
      <li>{props.user.street}</li>
      <li>{props.user.city}, {props.user.state} {props.user.zip}</li>
      <li>{props.user.email}</li>
      <li>{props.user.phone}</li>

    </ul>
    <Link id="button" to="/edit" className="button">Edit My Info</Link>
  </div>

  );
};

export default ProfileInfo;
