import React from 'react';

import '../styles/components/About.styl';

const About = ({ title, jobTitle, email, phone, website, address, avatar }) => {
  return (
    <>
      <img src={avatar} alt={title} />
      <div className="About">
        <h1 className="About-title">Name: {title}</h1>
        <h3 className="About-item">Job: {jobTitle}</h3>
        <div className="About--contact">
          <h3 className="About-item">Phone: {phone}</h3>
          <h3 className="About-item">Mail: {email}</h3>
          <a className="About-item" href={website}>
            Website: {website}
          </a>
        </div>
        <h3 className="About-item">{address}</h3>
      </div>
    </>
  );
};

export default About;
