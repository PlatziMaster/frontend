import React from "react";

export default function About({name, profession, address, email}) {
  return (
    <div className="about">
      <div>
        <h2 className="About-title">{name}</h2>
        <h3 className="About-item">{profession}</h3>
      </div>
      <div className="about-content">
        <div className="About-item">{email}</div>
        <div className="About-item">{address}</div>
      </div>
    </div>
  );
}