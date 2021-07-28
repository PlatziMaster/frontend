import React from 'react';
import '../styles/components/Skills.styl';
import Title from './Title';

const Skills = () => (
  <div className="Skills">
    <div className="Skills-title">
      <Title title="Skills" />
    </div>
    <div className="Skills-items">
      <div className="Skills-item">
        <p>React.js</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '80%' }}>
            <span>80%</span>
          </div>
        </div>
      </div>
      <div className="Skills-item">
        <p>JavaScript</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '85%' }}>
            <span>85%</span>
          </div>
        </div>
      </div>
      <div className="Skills-item">
        <p>Git & GitHub</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '75%' }}>
            <span>75%</span>
          </div>
        </div>
      </div>
      <div className="Skills-item">
        <p>Databases</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '70%' }}>
            <span>70%</span>
          </div>
        </div>
      </div>
      <div className="Skills-item">
        <p>HTML</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '70%' }}>
            <span>70%</span>
          </div>
        </div>
      </div>
      <div className="Skills-item">
        <p>CSS</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '80%' }}>
            <span>80%</span>
          </div>
        </div>
      </div>
      <div className="Skills-item">
        <p>Python</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '55%' }}>
            <span>55%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
