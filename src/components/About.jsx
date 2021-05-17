/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

const About = ({
  fullName,
  job,
  phone,
  email,
  website,
  address,
  avatar = "https://s.gravatar.com/avatar/cacefe054a0861d9495c63767303b16e?s=80",
}) => {
  return (
    <div className="About-card">
      <div className="About-avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="About-info">
        <h2 className="About-title">{fullName}</h2>
        <p className="About-item">{job}</p>
        <div className="About-item contact">
          <p>{phone}</p>
          <p>{email}</p>
          <p>{website}</p>
        </div>
        <p className="About-item">{address}</p>
      </div>
    </div>
  );
};

export default About;
