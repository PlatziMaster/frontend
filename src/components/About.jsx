import React from 'react';

import '../styles/components/About.styl';

const About = ({ title, jobTitle, email, phone, website, address, avatar }) => {
  return (
    <>
      <img src={avatar} alt={title} />
      <div className="About">
        <h1>{title}</h1>
        <h3>{jobTitle}</h3>
        <div className="About--contact">
          <h3>Phone: {phone}</h3>
          <h3>Mail: {email}</h3>
          <a href={website}>Website: {website}</a>
        </div>
        <h3>{address}</h3>
      </div>
    </>
  );
};

export default About;
