import React from 'react';
import '../styles/components/Languages.styl';
import Title from './Title';

const Languages = () => (
  <div className="Languages">
    <div className="Languages-title">
      <Title title="Languages" />
    </div>
    <div className="Languages-items">
      <div className="Languages-item">
        <p>Spanish</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '100%' }}>
            <span>100%</span>
          </div>
        </div>
      </div>
      <div className="Languages-item">
        <p>English</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '75%' }}>
            <span>75%</span>
          </div>
        </div>
      </div>
      <div className="Languages-item">
        <p>Languages Item</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '80%' }}>
            <span>80%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Languages;
