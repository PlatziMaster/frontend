import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section className="Experience">
      <h2 className="Experience-title">Experience</h2>
      <div className="Experience-items">
        {experience.map((item, i) => {
          return (
            <div key={i} className="Experience-item">
              <p className="Experience-item-job">{`${item.company} | ${item.jobTitle}`}</p>
              <p className="Experience-item-date">{`${item.startDate} | ${item.endDate}`}</p>
              <p className="Experience-item-description">{item.jobDescription}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience;
