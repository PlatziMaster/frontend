import React from 'react';
import '../styles/components/About.styl';
import Title from './Title';

const About = () => (
  <div className="About">
    <div className="About-title">
      <Title title="About" />
    </div>
    <div className="About-item">
      <h3>About Item</h3>
    </div>
    <div className="About-item">
      <h3>About Item</h3>
    </div>
    <div className="About-item">
      <h3>About Item</h3>
    </div>
  </div>
);

export default About;
