import React from 'react';
import '../styles/components/Interest.styl';
import Title from './Title';

const Interest = ({ data }) => (
  <div className="Interest">
    <div className="Interest-title">
      <Title title="Interest" />
    </div>
    <div className="Interest-items">
      {
        data && data.map(item => (
          <div className="Interest-item" key={item}>
            <p>{item}</p>
          </div>
        ))
      }
    </div>
  </div>
);

export default Interest;
