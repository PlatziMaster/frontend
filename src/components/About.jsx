import React from 'react';
import '../styles/components/About.css';

const About = ({ nameTitle, professionJob, phone, email, website, address, avatar}) => {
  return (
    <>
      <div className="about-img">
        <img src="https://s.gravatar.com/avatar/5e41181c357da517998cf17978285fdb?s=80" alt="Avatar" />
      </div>
      <div className="about">
        <h1 className="About-title">{nameTitle}</h1>
        <h2>{professionJob}</h2>
        <div className="about-list">
          <ol>
            <ul className="About-item">Cel: {phone}</ul>
            <ul className="About-item">Email: {email}</ul>
            <ul className="About-item">Website: {website}</ul>
            <ul className="About-item">Address: {address}</ul>
          </ol>
        </div>
      </div>
    </>
  );
};
export default About;
