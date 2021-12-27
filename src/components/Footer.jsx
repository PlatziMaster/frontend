/* eslint-disable react/destructuring-assignment */
import React from "react";

const Footer = function ({ social, data }) {
  return (
    <footer>
      <section className="left">
        <ul>
          <li>
            {social?.map((soc) => (
              <article key={soc.icon} className="social-detail--card">
                <span className="pin-icon">
                  <i className={soc.icon} aria-hidden="true" />
                </span>
                <div className="social--card_data">
                  <a href={soc.url}>
                    <p className="data--title">{soc.name}</p>
                  </a>
                </div>
              </article>
            ))}
          </li>
        </ul>
      </section>
      <section className="right">
        <ul>
          <li>
            <article className="personal-detail--card">
              <span className="location-icon">
                <i className="fa fa-location-arrow" aria-hidden="true" />
              </span>
              <div className="personal--card_data">
                <p className="data--title">Location</p>
                <p>
                  <i>{data.address}</i>
                </p>
              </div>
            </article>
          </li>

          <li>
            <article className="personal-detail--card">
              <span className="phone-icon">
                <i className="fa fa-phone-square" aria-hidden="true" />
              </span>
              <div className="personal--card_data">
                <p className="data--title">Phone</p>
                <p>
                  <i>{data.phone}</i>
                </p>
              </div>
            </article>
          </li>

          <li>
            <article className="personal-detail--card">
              <span className="email-icon">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </span>
              <div className="personal--card_data">
                <p className="data--title">Email</p>
                <p>
                  <i>{data.email}</i>
                </p>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
