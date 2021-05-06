import React from 'react';
import PropTypes from 'prop-types';
const Experience = ({ experience = [] }) => {
  /**
   * De la respuesta de la API se obtiene un arreglo de
   * experiencias de trabajo
   */
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
Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
