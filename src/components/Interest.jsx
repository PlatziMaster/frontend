import React from 'react';

import '../styles/components/Interest.styl';
const Interest = ({ Interest = [] }) => {
  return (
    <div className="Interest">
      <h1 className="Interest-title">Interest</h1>
      <div className="Interest--items">
        {Interest.map(item => (
          <p className="Interest--item">- {item}</p>
        ))}
      </div>
    </div>
  );
};

export default Interest;
