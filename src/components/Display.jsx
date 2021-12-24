import React from "react";

const Display = function ({ display }) {
  return (
    <section className="display">
      <img src={display.avatar} className="display--image" alt="avatar" />
      <h1 className="display--title">
        {display.first_name}
        <br />
        <span className="display--lastname">{display.last_name}</span>
        {" "}
      </h1>

      <h3 className="display--subtitle">{ display.gender}</h3>
    </section>
  );
};

export default Display;
