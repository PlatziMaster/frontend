import React from 'react';
import '../styles/components/Experience.css';

export default function Experience({ title, experience }) {
  return (
    <div className='experience'>
      <h3 className='experience-title'>{title}</h3>
      {experience && experience?.map((item) => {
        return (
          <div className='experience-item' key={experience.indexOf(item)}>
            <h3 className='job-title'>{`${item.company} - ${item.jobTitle}`}</h3>
            <h5 className='job-date'>{`${item.startDate} - ${item.endDate}`}</h5>
            <div className='job-description'>
              <p>
                {item.jobDescription}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

