import React from 'react';
import styled from 'styled-components';

const StyledItemLanguages = styled.li`
  display:flex;
  flex-direction: row;
  flex-basis: 50%; 
`

function Languages() {
  return( 
    <React.Fragment>
      <h2 className="Languages-title">Languages-title</h2>
      <StyledItemLanguages>
        <span className="Languages-item">Languages-item</span>
        <span className="Languages-item">Languages-item</span>
        <span className="Languages-item">Languages-item</span>
      </StyledItemLanguages>
    </React.Fragment>
  )
}; 

export default Languages; 