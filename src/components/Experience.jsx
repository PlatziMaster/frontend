import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({
  experience,
}) => {

  return (
    <div className='experience'>
      <h2 className='experience-title'>Experiencia Laboral</h2>
      {experience &&
        experience.map((item, index) => {
          const { id } = index;
          return (
            <div key={id} className='experience-item'>
              <h3 className='experience-jobtitle'>{item.jobTitle}</h3>
              <p className='experience-company'><span>{item.company}</span></p>
              <p className='experience-date'><span>{item.startDate}</span> - <span>{item.endDate}</span></p>
              <p className='experience-jobdesc'>{item.jobDescription}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Experience;
