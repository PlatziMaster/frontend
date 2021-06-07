import React from 'react';
import '../styles/components/global.styl';

function Interest({ interest }) {
  return (
    <div className="interest">
      <div className="title-container">
        <h2 className="title">Interest</h2>
      </div>
      {interest.map((item, index) => (
        <div className="items" key={item}>
          <p className="item">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default Interest;
