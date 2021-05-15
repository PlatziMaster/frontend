import React from 'react';
import '../styles/components/About.css';

const About = ({ nameTitle, professionJob, phone, email, website, address, avatar}) => {
  return (
    <>
      <div className="about-img">
        <img src={`https://www.gravatar.com/avatar/{avatar}?d=identicon`} alt="Avatar" />
      </div>
      <div className="about">
        <h1>{nameTitle}</h1>
        <h2>{professionJob}</h2>
        <div className="about-list">
          <ol>
            <ul>Cel: {phone}</ul>
            <ul>Email: {email}</ul>
            <ul>Website: {website}</ul>
            <ul>Address: {address}</ul>
          </ol>
        </div>
      </div>
    </>
  );
};
export default About;
