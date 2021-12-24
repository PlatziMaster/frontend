import React from "react";

const Languages = function ({ languages }) {
  return (
    <section className="languages">
      <h2 className="languages--title">LANGUAGES</h2>
      <div className="language-cards--container">
        {languages?.map((lan) => (
          <article key={lan.icon} className="language-detail--card">
            <span className={lan.nameIcon}>
              <i className={lan.icon} aria-hidden="true" />
            </span>
            <div className="language--card_data">
              <p className="data--title">{lan.name}</p>
              <p>
                <i>{lan.level}</i>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Languages;
