import React from 'react';
import '../styles/components/Languages.styl';
import Title from './Title';

const Languages = ({ data }) => (
  <div className="Languages">
    <div className="Languages-title">
      <Title title="Languages" />
    </div>
    <div className="Languages-items">
      {
        data && data.map(item => (
          <div className="Languages-item" key={item.name}>
            <p>{item.name}</p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${item.percentage}` }}>
                <span>{item.percentage}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

export default Languages;
