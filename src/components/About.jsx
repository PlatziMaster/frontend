import React from 'react';
import '../styles/components/About.scss';

const About = ({ children }) => (
  <section className="about">
    <div className="about__container">
      {children}
    </div>
  </section>
);

export default About;