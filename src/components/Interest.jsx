import React from "react";

const Interest = function ({ interest }) {
  return (
    <section className="interest-card_container">
      <h2 className="cards--title">INTERESTS & EXPERTISE</h2>
      <div className="interest-card__icon--container .interest-card--title">
        {interest?.map((int) => (
          <div key={int.name} className={int.name}>
            <i className={int.icon} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interest;
