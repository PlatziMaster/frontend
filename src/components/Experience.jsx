import React from 'react';
import '../styles/components/Experience.styl';

const Experience = (data) => {
  const { experience } = data;
  return (
    <section className='Experience-container'>
      <h2 className='Experience-title'>Experience</h2>
      <div className='Experience-items-container'>
        { experience &&
          experience.map(item => (
            <div className='Experience-item' key={experience.indexOf(item)}>
              <h3 className='Experience-company'>{item.company}<span className='Experience-jobDate'> -- {item.startDate} - {item.endDate}</span></h3>
              <h4 className='Experience-jobTitle'>{item.jobTitle}</h4>
              <p className='Experience-jobDescription'>{item.jobDescription}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Experience;
