import React from 'react';

import '../styles/components/About.styl';

const About = () => {
  return (
    <>
      <img src="https://arepa.s3.amazonaws.com/melissa.jpg" />
      <div className="About">
        <h1>.Header-title</h1>
        <h3>.Header-job-title</h3>
        <div className="About--contact">
          <h3>.Header-phone</h3>
          <h3>.Header-email</h3>
          <h3>.Header-website</h3>
        </div>
        <h3>.Header-address</h3>
      </div>
    </>
  );
};

export default About;
