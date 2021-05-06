import React from 'react';

const Experience = ({ experience = [] }) => {
  return (
    <section className="Experience Container">
      <h2 className="Experience-title">
        <i className="fas fa-briefcase"></i>
        Experience
      </h2>
      {experience.map(
        ({ company, endDate, jobDescription, jobTitle, startDate }, id) => (
          <div className="Experience-item" key={id}>
            <div className="Experience-item-content">
              <h3 className="Experience-item-company">
                {jobTitle}
                <small>{company}</small>
              </h3>
              <p className="Experience-item-date date">
                {startDate} - {endDate}
              </p>
            </div>

            <p className="Experience-item-jobDescription">{jobDescription}</p>
          </div>
        )
      )}
    </section>
  );
};

export default Experience;
