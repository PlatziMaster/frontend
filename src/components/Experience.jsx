import React from 'react';

import '../styles/components/Experience.styl';

const Experience = ({ Experience = [] }) => (
  <div className="Experience">
    <h1 className="Experience-title">Experience</h1>
    <div className="Experience--items">
      {Experience.map(item => (
        <div className="Experience--item--jobs">
          <p className="Experience-item" key={1}>
            -Company: <span>{item.company}</span>
          </p>
          <p className="Experience-item" key={2}>
            -EndDate: <span>{item.endDate}</span>
          </p>
          <p className="Experience-item" key={3}>
            -JobDescription: <span>{item.jobDescription}</span>
          </p>
          <p className="Experience-item" key={4}>
            -JobTitle: <span>{item.jobTitle}</span>
          </p>
          <p className="Experience-item" key={5}>
            -StartDate: <span>{item.startDate}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
