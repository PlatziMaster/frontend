import React from 'react';

const About = ({name, profession, adress, email, website, phone}) => {
  return (
    <div className="About">
      <h1 className="About-title">{name}</h1>
      <p className="About-job-title">{profession}</p>
      <ul className="About-contact">
        <li className="About-item"><i className="fas fa-phone"></i> {phone}</li>
        <li className="About-item"><i className="far fa-envelope"></i> {email}</li>
        <li className="About-item"><i className="fab fa-github"></i> <a href={website} target="_blank">/josehtrevino</a></li>
        <li className="About-item"><i className="far fa-address-card"></i> {adress}</li>
      </ul>
    </div>
  )
}

export default About;
