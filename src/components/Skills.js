import React from 'react';
import ProgressItem from './ProgressItem';
//import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
  return (
    <div>
      <h4 className="Skills-title"> Skills</h4>
      <div className="px-3 mt-3">
        {skills?.map(item => {
          return (
            <ProgressItem key={item.name} {...item} className="Skills-item" />
          );
        })}
      </div>

      <span className="Skills-item" />
      <span className="Skills-item" />
      <span className="Skills-item" />
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
