// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const Education = ({ education }) => (
  <>
    <div className='botonned rightboxes'>
      <h1 className='bottomline' id='Education-title'>Educación</h1>
    </div>
    <div className='botonned rightboxes'>
      {education.map((edu) => (
        <React.Fragment key={edu.institution}>
          <div className='leftsectiontable' id='Education-item'>
            <h2>{`${edu.startDate} - ${edu.endDate}`}</h2>
          </div>
          <div className='rightsectiontable'>
            <h2>{edu.institution}</h2>
            <p><i>{edu.degree}</i></p>
            <a href={edu.description.url} target='_blank' rel='noreferrer'>
              <p>{edu.description.title}</p>
            </a>
          </div>
        </React.Fragment>
      ))}
    </div>
  </>
);

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.object),
};
