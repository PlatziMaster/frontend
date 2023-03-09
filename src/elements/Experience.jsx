import React from 'react';
import { MdWork } from 'react-icons/md';

const Experience = ({ experience }) => {
  return (
    <div className='box experience'>
      <div className='flex align-items-center gap-2'>
        <MdWork color='#588B8B' />
        <div className='title'>Experiencia</div>
      </div>
      <div style={{ marginTop: '16px' }}>
        {experience &&
          experience.length > 0 &&
          experience.map((element, index) => {
            return (
              <div key={element.startDate} className='experience-container'>
                <div className='flex align-items-center justify-content-between'>
                  <div className='company'>{element.company}</div>
                  <div className=''>
                    {element.startDate}
                    {' '}
                    -
                    {' '}
                    {element.endDate}
                    ,
                    {' '}
                    {element.location}
                  </div>
                </div>

                <div className='job'>{element.jobTitle}</div>
                <div>{element.jobDescription}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Experience;
