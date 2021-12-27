import React from "react";

const Social = function ({ social }) {
  return (
    <section className="social">
      <h2 className="social--title">SOCIAL</h2>
      <div className="social-cards--container">
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
      </div>
    </section>
  );
};

export default Social;
