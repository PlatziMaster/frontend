// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const Experience = ({ experience }) => (
  <>
    <div className='botonned rightboxes'>
      <a href='https://www.linkedin.com/in/jesuskata' target='_blank' rel='noreferrer'>
        <h1 className='bottomline' id='Experience-title'>Experiencia Laboral</h1>
      </a>
    </div>
    <div className='botonned rightboxes' id='#Experience-item'>
      {experience.map((exp, index) => (
        <React.Fragment key={exp.code}>
          <div className='leftsectiontable'>
            <h2>{`${exp.startDate} - ${exp.endDate}`}</h2>
          </div>
          <div className='rightsectiontable'>
            <h2>{exp.company}</h2>
            <p><i>{exp.jobTitle}</i></p>
            <ul className='ulclass'>
              {exp.activities.map((act) => (
                <li key={act} className='liclass'>{act}</li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      ))}
    </div>
  </>
);

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.object),
};
