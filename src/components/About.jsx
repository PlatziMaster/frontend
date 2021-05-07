/* Componente About, en este se muestran los 
contactos de redes sociales y demas sobre la personal  */
import React from 'react';
import '../styles/components/About.scss';

const About = ({ children }) => (
  <section className="about">
    <h2>About:</h2>
    <div className="about__container">
      {children}
    </div>
  </section>
);

export default About;