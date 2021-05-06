import React from 'react';

const About = ({ data = {} }) => {
  const { address, email, website, phone } = data;
  return (
    <div className="About">
      <div className="About-title">
        <a href={`tel:${phone}`} className="About-phone About-item">
          <i className="fas fa-phone"></i>
          {phone}
        </a>
        <a
          href={`mailto:${email}?subject=Feedback`}
          className="About-email About-item"
        >
          <i className="far fa-envelope"></i>
          {email}
        </a>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="About-website About-item"
        >
          <i className="fas fa-globe-americas"></i>
          {website}
        </a>
        <p className="About-adress About-item">
          <i className="fas fa-map-marker-alt"></i>
          {address}
        </p>
      </div>
    </div>
  );
};

export default About;
