import React from 'react';

import '../styles/components/About.styl';

const About = ({ title, jobTitle, email, phone, website, address }) => {
  return (
    <>
      <img src="https://arepa.s3.amazonaws.com/melissa.jpg" />
      <div className="About">
        <h1>{title}</h1>
        <h3>{jobTitle}</h3>
        <div className="About--contact">
          <h3>{phone}</h3>
          <h3>{email}</h3>
          <h3>{website}</h3>
        </div>
        <h3>{address}</h3>
      </div>
    </>
  );
};

export default About;
