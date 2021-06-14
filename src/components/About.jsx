import React from 'react';
import styled from 'styled-components'

const AboutStyle = styled.div`
  margin: 5%; 
  flex-direction: column;
`
const StyledItemsRow = styled.div`
  width: 100px;
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap; 
`

function About({data}, props) {
  return( 
    <AboutStyle>
      <h2 className="About-title">About</h2>
      <StyledItemsRow>
        <span className="About-item">Facebook</span>
        <span className="About-item">Twitter</span>
        <span className="About-item">GitHub</span>
      </StyledItemsRow>
    </AboutStyle>    
  )
}; 

export default About; 