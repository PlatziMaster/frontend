import React from 'react';
import '../styles/components/Skills.styl';
import Title from './Title';

const Skills = ({ data }) => (
  <div className="Skills">
    <div className="Skills-title">
      <Title title="Skills" />
    </div>
    <div className="Skills-items">
      {
        data && data.map(item => (
          <div className="Skills-item" key={item.name}>
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

export default Skills;
