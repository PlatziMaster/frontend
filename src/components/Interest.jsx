import React from 'react';
import '../styles/components/Interest.styl';
import Title from './Title';

const Interest = () => (
  <div className="Interest">
    <div className="Interest-title">
      <Title title="Interest" />
    </div>
    <div className="Interest-item">
      <h3>Interest Item</h3>
    </div>
    <div className="Interest-item">
      <h3>Interest Item</h3>
    </div>
    <div className="Interest-item">
      <h3>Interest Item</h3>
    </div>
  </div>
);

export default Interest;
