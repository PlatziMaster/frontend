import React from 'react';
import '../styles/components/Experience.styl';
import Title from './Title';

const Experience = () => (
  <div className="Experience">
    <div className="Experience-title">
      <Title title="Experience" />
    </div>
    <div className="Experience-items">
      <div>
        <div className="Experience-item">
          <h1>Experience Item</h1>
        </div>
        <div className="Experience-item">
          <h1>Experience Item</h1>
        </div>
      </div>
      <div>
        <div className="Experience-item">
          <h1>Experience Item</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
