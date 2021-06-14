import React from 'react';
import styled from 'styled-components';

const StyledItemAcademic = styled.li`
  display:flex;
  flex-direction: column;
  flex-basis: 50%; 
  text-align: left; 
`

function Academic() {
  return( 
    <React.Fragment>
      <h2 className="Academic-title">Academic-title</h2>
      <StyledItemAcademic>
        <span className="Academic-item">Academic-item</span>
        <span className="Academic-item">Academic-item</span>
        <span className="Academic-item">Academic-item</span>
       </StyledItemAcademic>
    </React.Fragment>
  )
}; 

export default Academic; 