import React from 'react';
import About from './About';
import styled from "styled-components";


const Header = ({ avatar, name, profession, address, email, phone, website }) => {
  return (
    <div>
      <div className='Header-title'>
        <h2>{name}</h2>
      </div>
      <div className='Header-job-title'>
        <span>{profession}</span>
      </div>

      <About 
          email = {email}
          phone = {phone}
          website = {website}
      />
      <div className='Header-adress'>
        <span>{address}</span>
      </div>
    </div>
  );
};

export default Header;
