import React from "react";
import "../styles/components/App.styl";

const About = ({
  title,
  job,
  phone,
  email,
  website,
  address,
  avatar,
}) => {
  return (
    <div className="About-card">
      <div className="About-avatar">
      <figure>
        <img src={avatar} alt={`Photo`} />
        </figure>
      </div>
      <div className="About-info">
        <h1 className="About-title">{title}</h1>
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
