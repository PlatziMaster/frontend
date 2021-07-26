import React from 'react';
import '../styles/components/Academic.styl';
import Title from './Title';

const Academic = () => (
  <div className="Academic">
    <div className="Academic-title">
      <Title title="Academic" />
    </div>
    <div className="Academic-item">
      <h3>Academic Item</h3>
    </div>
    <div className="Academic-item">
      <h3>Academic Item</h3>
    </div>
    <div className="Academic-item">
      <h3>Academic Item</h3>
    </div>
  </div>
);

export default Academic;
