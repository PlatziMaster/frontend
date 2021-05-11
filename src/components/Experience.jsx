import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';

import '../styles/components/Experience.styl';

const Experience = ({ experience }) => {
  return (
    <div className='Experience'>
      <Title name='Experience' />
      <ul className='Experience__list'>
        {experience?.map(exp => (
          <li key={exp.company} className='Experience-item'>
            <p className='Experience-item__job'>{exp.jobTitle}</p>
            <p className='Experience-item__info'>
              {exp.company}
              {' '}
              |
              {' '}
              {exp.startDate}
              {' '}
              to
              {' '}
              {exp.endDate}
            </p>
            <p className='Experience-item__description'>{exp.jobDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
