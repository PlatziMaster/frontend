import React from 'react';
import '../styles/components/Experience.styl';

/**
 * Experience component
 * Props:
 * @param {component} children - Get the ExperienceCard component
 */
const Experience = ({children})  => (
  <div className="container-experience">
    <div className="flex-container">
      <span className="material-icons icon-big">
        construction
      </span>
      <div className="title margin-y-1">Experience</div>
    </div>
    <div className="container-cards">{children}</div>
  </div>
);

export default Experience;
