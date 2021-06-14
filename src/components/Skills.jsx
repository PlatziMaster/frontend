import React from 'react';
import styled from 'styled-components';

const StyledItemSkills = styled.li`
  display:flex;
  flex-direction: column;
  flex-basis: 50%; 
`

function Skills() {
  return( 
    <React.Fragment> 
      <h2 className="Skills-title">Skills</h2>
      <StyledItemSkills>
        <span className="Skills-item">Skills-item</span>
        <span className="Skills-item">Skills-item</span>
        <span className="Skills-item">Skills-item</span>
      </StyledItemSkills>
    </React.Fragment>
  )
}; 

export default Skills; 