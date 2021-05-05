import React from 'react';

import '../styles/components/Interest.styl';
const Interest = ({ Interest = [] }) => {
  return (
    <div className="Interest">
      <h1>Interest</h1>
      <div className="Interest--items">
        {Interest.map(item => (
          <p>- {item}</p>
        ))}
      </div>
    </div>
  );
};

export default Interest;
