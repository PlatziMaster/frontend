import React from 'react';

import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';
import github from '../assets/images/github.png'; 

import styled from 'styled-components'

const AboutStyle = styled.div`
  margin: 5%; 
  flex-direction: row;
`
const StyledItemsRow = styled.div`
  width: 100px;
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap; 
`

function About() {
  return( 
    <AboutStyle>
      <h2 className="About-title">About</h2>
      <StyledItemsRow>
        <img src={facebook} alt="phone icon" /><span className="About-item">Facebook</span>
        <img src={linkedin} alt="phone icon" /><span className="About-item">LinkedIn</span>
        <img src={github} alt="phone icon" /><span className="About-item">GitHub</span>
      </StyledItemsRow>
    </AboutStyle>    
  )
}; 

export default About; 