import React from 'react';
import '../styles/components/Experience.styl';
import Title from './Title';
import Subtitle from './Subtitle';

const Experience = () => (
  <div className="Experience">
    <div className="Experience-title">
      <Title title="Experience" />
    </div>
    <div className="Experience-items">
      <div>
        <div className="Experience-item">
          <div className="Experience-">
            <Subtitle title="Experience Item"></Subtitle>
          </div>
          <p>cisabciabscia</p>
        </div>
        <div className="Experience-item">
          <Subtitle title="Experience Item"></Subtitle>
          <p>cisabciabscia</p>
        </div>
      </div>
      <div>
        <div className="Experience-item">
          <Subtitle title="Experience Item"></Subtitle>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
