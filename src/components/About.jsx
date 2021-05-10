import React from 'react';
import Foto from '../assets/fotomiap.jpg';
import '../styles/components/About.styl';

const About = (information) => {
  console.log(information)
  const {name, profession, phone, email, website, address } = information.information;
  return (
    <div className="card about">
      <div className="about__content">
        <div>
          <img src={Foto} alt="foto perfil"/>
        </div>
        <div>
          <h1>{name}</h1>
          <h3>{profession}</h3>
          <h3>{phone} {email} {website}</h3>
          <h3>{address}</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
