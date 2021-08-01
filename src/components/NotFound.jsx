import React from 'react';
import '../styles/components/NotFound.styl';

const NotFound = ({ error }) => (
  <div className="NotFound">
    <h1>{error.toString()}</h1>
  </div>
);

export default NotFound;
