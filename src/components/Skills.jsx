import React from 'react';
import '../styles/components/Skills.styl';

/**
 * Skills component
 * Props:
 * @param {component} children - Get the SkillsCard component
 */
const Skills = ({children}) => (
  <div className="container-skills">
    <div className="flex-container">
      <span className="material-icons icon-big">
        home_repair_service
      </span>
      <div className="title margin-y-1">Skills</div>
    </div>
    <div className="container-cards">{children}</div>
  </div>
);

export default Skills;
