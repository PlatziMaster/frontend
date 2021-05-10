import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({experience, title}) => {
  return (
    <div className="card experience">
      <div className="experience__title">
        <h2>{title}</h2>
      </div>
      <div className="experience__items">
        {
          experience?.map(item =>
            <div className="experience__item" key={item.id}>
              <h3>{item.jobTitle}</h3> 
              <p>{item.company}</p> 
              <p>{item.startDate} to {item.endDate}</p> 
              <p>{item.jobDescription}</p> 
            </div>
            
          )
        }
      </div>
    </div>
  );
}

export default Experience;
