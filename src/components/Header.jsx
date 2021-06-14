import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color #FAF9F4; 
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  height: 50%;
  align-items: center; 
  flex-direction: row; 
  padding-left: 5%
`

const StyledItemsHeader = styled.div`
  flex-direction: column; 
  margin-left: 10%; 
`

const StyledItemsRow = styled.div`
  flex-direction: column; 
  margin: 5px;
  margin-left: 0;
`

function Header({data}, props) {
  
  return( 
    <StyledHeader>
      <img src={data.avatar} />
      <StyledItemsHeader>
        <h2 className="Header-title">{data.name}</h2>
        <span className="Header-item">{data.profession}</span>
        <StyledItemsRow>
          <span className="Header-item">{data.phone}</span>
          <span className="Header-item">{data.email}</span>
          <span className="Header-item">{data.website}</span>
        </StyledItemsRow>
        <StyledItemsRow>
          <span className="Header-item">{data.address}</span>
        </StyledItemsRow>
      </StyledItemsHeader>
      {props.children}
    </StyledHeader>    
  )
}; 

export default Header; 