import React from "react";

const Experience = function ({ experience }) {
  return (
    <section className="experience-card_container">
      <h2 className="experience-card--title cards--title">
        <span className="pencil-icon">
          <i className="fa fa-pencil-square" aria-hidden="true" />
        </span>
        WORK EXPERIENCE
      </h2>

      {experience?.map((exp) => (
        <article
          key={exp.jobTitle}
          className="experience-card__details--container"
        >
          <div className="experience-card__details--date">
            <p className="year">
              {exp.startDate}
              -
              {exp.endDate}
            </p>
            <p>{exp.location}</p>
          </div>
          <div className="experience-card__info--container">
            <p className="experience-card__info--jobname">{exp.jobTitle}</p>
            <p className="experience-card__info--workplace">{exp.company}</p>
            <p className="experience-card__info--description">
              {exp.jobDescription}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Experience;
