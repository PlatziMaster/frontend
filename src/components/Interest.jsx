import React from 'react';
import styled from 'styled-components';

const StyledItemInterest = styled.li`
  display:flex;
  flex-direction: row;
  flex-basis: 50%; 
  text-align: left; 
`

function Interest() {
  return( 
    <React.Fragment>
      <h2 className="Interest-title">Interest-title</h2>
      <StyledItemInterest>
        <span className="Interest-item">Interest-item</span>
        <span className="Interest-item">Interest-item</span>
        <span className="Interest-item">Interest-item</span>
      </StyledItemInterest>
    </React.Fragment>
  )
}; 

export default Interest; 