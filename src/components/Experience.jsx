import React from 'react';
import '../styles/components/Experience.scss';

const Experience = ({ children }) => (
  <section className="experience">
    <div className="experience__container">
      {children}
    </div>
  </section>
);

export default Experience;