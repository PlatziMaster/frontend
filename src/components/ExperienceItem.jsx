import React from 'react';
import '../styles/components/ExperienceItem.styl';

const ExperienceItem = (props) => {
  const data = props.experience.experience; // Experience array for create elements
  return (
    <>
      {data.map((experience, index) => {
        return (
          <div className="Experience-item shadow-border" key={index}>
            <h3 className="Experience-item__title">{experience.jobTitle}</h3>
            <h5 className="Experience-item__company">{experience.company}</h5>
            <p className="Experience-item__decription">{experience.jobDescription}</p>
            <div className="Experience-item__dates">
              <div className="Experience-item__date">{experience.startDate}</div>
              <hr />
              <div className="Experience-item__date">{experience.endDate}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ExperienceItem;