/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/components/App.styl';

function About({ props }) {
  return (
    <div className="header-list">
      <h2>{props.name}</h2>
      <h3>{props.profession}</h3>
      <ul>
        <li>{props.phone}</li>
        <li>{props.email}</li>
        <li>{props.website}</li>
      </ul>
      <h3>{props.address}</h3>
    </div>
  );
}

export default About;
