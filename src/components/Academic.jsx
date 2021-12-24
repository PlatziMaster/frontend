import React from "react";

const Academic = function ({ academic }) {
  return (
    <section className=" education-card_container">
      <h2 className="education-card--title cards--title">
        <span className="book-icon ">
          <i className="fa fa-book" aria-hidden="true" />
        </span>
        EDUCATION
      </h2>
      {academic?.map((aca) => (
        <article
          key={aca.location}
          className="education-card__details--container"
        >
          <div className="education-card__details--date">
            <p className="year">
              {aca.startDate}
              |
              {aca.endDate}
            </p>
            <p>{aca.location}</p>
          </div>
          <div className="education-card__info--container">
            <p className="education-card__info--college">{aca.institution}</p>
            <p className="education-card__info--degree">{aca.degree}</p>
            <p className="education-card__info--description">
              {aca.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Academic;
