import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({experience, title}) => {
  return (
    <div className="card experience">
      <h2 className="Experience-title">{title}</h2>
      <div className="experience__items">
        {
          experience?
            experience?.map(item =>
              <div className="Experience-item" key={item.id}>
                <h3>{item.jobTitle}</h3> 
                <p>{item.company}</p> 
                <p>{item.startDate} to {item.endDate}</p> 
                <p>{item.jobDescription}</p> 
              </div>
              
            )
            :
            <>
              <div className="Experience-item"></div>
              <div className="Experience-item"></div>
              <div className="Experience-item"></div>
            </>
        }
      </div>
    </div>
  );
}

export default Experience;
