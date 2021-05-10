import React from 'react';
import '../styles/components/About.styl';

const About = ({name, profession, phone, email, website, address, avatar}) => {
  return (
    <div className="card about">
      <div className="about__content">
        <div>
          <img src={avatar} alt="foto perfil"/>
        </div>
        <div>
          <h1 className="About-title">{name}</h1>
          <h3 className="About-item">{profession}</h3>
          <h3 className="About-item">{phone} {email} {website}</h3>
          <h3 className="About-item">{address}</h3>
        </div>
      </div>
    </div>
  );
  
}

export default About;
