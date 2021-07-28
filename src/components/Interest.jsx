import React from 'react';
import '../styles/components/Interest.styl';
import Title from './Title';

const Interest = () => (
  <div className="Interest">
    <div className="Interest-title">
      <Title title="Interest" />
    </div>
    <div className="Interest-items">
      <div className="Interest-item">
        <p>Frontend</p>
      </div>
      <div className="Interest-item">
        <p>Backend</p>
      </div>
      <div className="Interest-item">
        <p>Web Development</p>
      </div>
      <div className="Interest-item">
        <p>Mobile Development</p>
      </div>
      <div className="Interest-item">
        <p>Data Science</p>
      </div>
      <div className="Interest-item">
        <p>Machine Learning</p>
      </div>
    </div>
  </div>
);

export default Interest;
