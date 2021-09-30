/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/components/App.styl';

function Profile(props) {
  return (
    <div className="category-container">
      <h2>Profile</h2>
      <p>{props.Profile}</p>
    </div>
  );
}

export default Profile;
