import React from 'react';
import '../styles/components/Experience.styl';
import Title from './Title';
import Subtitle from './Subtitle';

const Experience = ({ data }) => (
  <div className="Experience">
    <div className="Experience-title">
      <Title title="Experience" />
    </div>
    <div className="Experience-items">
      {
        data && data.map(item => (
          <div className="Experience-item" key={item.company}>
            <Subtitle title={item.jobTitle} />
            <h3>{item.company}</h3>
            <p className="Experience-item-Dates">{item.startDate} - {item.endDate}</p>
            <p>{item.jobDescription}</p>
            <div className="Experience-item-button">
              <a href={item.url}>Check it out!</a>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

export default Experience;
