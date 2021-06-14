import React from 'react';
import styled from 'styled-components'

const StyledExperience = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 5%;
`

const StyledItemColumn = styled.header`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

function Experience({ data }) {
  return( 
    <React.Fragment>
      <h2 className="Experience-title">Experience</h2>
      <StyledExperience>
        <StyledItemColumn>
        {data.length && data.experience[0] && data.experience.map( d => <div>{d}</div>)}
          <span className="Experience-item"></span>
          <span className="Experience-item">Experience-item</span>
        </StyledItemColumn>
        <StyledItemColumn>
          <span className="Experience-item">Experience-item</span>
          <span className="Experience-item">Experience-item</span>
        </StyledItemColumn>
      </StyledExperience>
    </React.Fragment>
  )
}; 

export default Experience; 