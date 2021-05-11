import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';

import '../styles/components/Skills.styl';

const Skills = ({ skills }) => {
  return (
    <div className='Skills'>
      <Title name='Skills' />
      <ul className='Skills__list'>
        {skills?.map(skill => (
          <li key={skill.name} className='Skills-item'>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
