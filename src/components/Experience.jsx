import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ experience }) => (
  <section className="Experience-container">
    <h2 className="Experience-title">Experince</h2>
    {experience.map(item => {
      return (
        <div key={item.company} className="Experience-item">
          <span>{item.company}</span>
          <span>{item.endDate}</span>
          <span>{item.jobDescription}</span>
          <span>{item.jobTitle}</span>
          <span>{item.startDate}</span>
        </div>
      );
    })}
  </section>
);

export default Experience;
