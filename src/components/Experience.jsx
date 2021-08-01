import React from 'react';
import '../styles/components/Experience.styl';

function Experience({ company, endDate, jobDescription, jobTitle, startDate }) {
  return( 
    <section className="Experience">
      <h3 className="Experience-title">{jobTitle}</h3>
      <div className="ExperienceContainer">
        <span className="Experience-item">{company}</span>
        <span className="Experience-item">{jobDescription}</span>
      </div> 
      <div className="ExperienceContainer">
      <span className="Experience-item">{startDate}</span>
        <span className="Experience-item">{endDate}</span>
      </div>  
    </section>
  )
}; 

export default Experience; 