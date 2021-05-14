import React from 'react';
import '../styles/components/About.styl';

const About = ({ about }) => (
  <div className="About-container">
    <h2 className="About-title">About</h2>
    <div>
      <span className="About-item">{about.profession}</span>
    </div>
    <div>
      <span className="About-item">{about.email}</span>
      <span className="About-item">{about.website}</span>
      <span className="About-item">{about.phone}</span>
    </div>
    <div>
      <span className="About-item">{about.address}</span>
    </div>
  </div>
);

export default About;
