import React from 'react';
import '../styles/components/ExperienceItem.css';
import PropTypes from 'prop-types';

const ExperienceItem = ({ company, occupation, startDate, endDate, description }) => (
  <div className='experience-item'>
    <h3 className='job-title'>{`${company} - ${occupation}`}</h3>
    <h5 className='job-date'>{`${startDate} - ${endDate}`}</h5>
    <div className='job-description'>
      <p>
        {description}
      </p>
    </div>
  </div>
);

ExperienceItem.propTypes = {
  company: PropTypes.string,
  occupation: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
};

export default ExperienceItem;
