/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

const About = function ({ info }) {
  return (
    <section className="info">
      <h2 className="info--title">INFO</h2>
      <div className="personal-cards_container">
        <article className="personal-detail--card">
          <span className="name-icon">
            <i className="fa fa-user-circle-o" aria-hidden="true" />
          </span>
          <div className="personal--card_data">
            <p className="data--title">Name</p>
            <p>
              <i>
                {info.firstname} {info.lastname}
              </i>
            </p>
          </div>
        </article>

        <article className="personal-detail--card">
          <span className="location-icon">
            <i className="fa fa-location-arrow" aria-hidden="true" />
          </span>
          <div className="personal--card_data">
            <p className="data--title">Location</p>
            <p>
              <i>{info.address}</i>
            </p>
          </div>
        </article>

        <article className="personal-detail--card">
          <span className="phone-icon">
            <i className="fa fa-phone-square" aria-hidden="true" />
          </span>
          <div className="personal--card_data">
            <p className="data--title">Phone</p>
            <p>
              <i>{info.phone}</i>
            </p>
          </div>
        </article>

        <article className="personal-detail--card">
          <span className="email-icon">
            <i className="fa fa-envelope-o" aria-hidden="true" />
          </span>
          <div className="personal--card_data">
            <p className="data--title">Email</p>
            <p>
              <i>{info.email}</i>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
