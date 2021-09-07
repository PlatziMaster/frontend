import React from 'react';
import '../styles/components/SkillsItem.css';
import PropTypes from 'prop-types';

const SkillsItem = ({ name, percentage }) => (
  <div className='skills-item'>
    <h3 className='skill-name'>{name}</h3>
    <h3 className='percentage'>{percentage}</h3>
  </div>
);

SkillsItem.propTypes = {
  name: PropTypes.string,
  percentage: PropTypes.string,
};

export default SkillsItem;
