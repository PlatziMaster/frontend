import React from 'react';
import '../styles/components/Skills.styl';

/**
 * Skills component
 * Props:
 * @param {component} children - Get the SkillsCard component
 * @param {string} title - Title of the section that represents this component
 */
const Skills = ({title, children}) => (
  <div className="container-skills">
    <div className="flex-container">
      <span className="material-icons icon-big">
        home_repair_service
      </span>
      <div className="title margin-y-1">{title}</div>
    </div>
    <div className="container-cards">{children}</div>
  </div>
);

export default Skills;
