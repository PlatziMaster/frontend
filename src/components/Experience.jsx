import React, { useContext } from 'react';
import { appContext } from '../containers/AppContext';
import '../styles/components/Experience.styl';

const Experience = () => {
  const {
    data: {
      dataFromApi: {
        data: { experience },
      },
    },
  } = useContext(appContext);

  return (
    <section className="Container Experience Card-glass">
      <h4 className="H4-title Experience-title">Experience</h4>
      <div className="Experience-wrapper">
        {experience.map(
          ({ company, endDate, jobDescription, jobTitle, startDate }, i) => (
            <div className="Experience-card" key={i}>
              <h3 className="Experience-header">
                {jobTitle} - {company}
              </h3>
              <p className="Experience-date">
                {startDate} - {endDate}
              </p>
              <p className="Experience-description">{jobDescription}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
