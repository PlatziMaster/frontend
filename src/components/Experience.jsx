import React from 'react';
import '../styles/components/Experience.styl';

/**
 * Experience component
 * Props:
 * @param {component} children - Get the ExperienceCard component
 * @param {string} title - Title of the section that represents this component
 */
const Experience = ({title, children})  => (
  <div className="container-experience">
    <div className="flex-container">
      <span className="material-icons icon-big">
        construction
      </span>
      <div className="title margin-y-1">{title}</div>
    </div>
    <div className="container-cards">{children}</div>
  </div>
);

export default Experience;
