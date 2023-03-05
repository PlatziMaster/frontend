import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {
  return (
    <div className="wrapper">
      <h3>Interest</h3>
      <div className="interest-wrapper">
        {interest &&
          interest.map((int, i) => (
            <p className="interest-box" key={`${Math.random(i)}`}>
              {int}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Interest;
