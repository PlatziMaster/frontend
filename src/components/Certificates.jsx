import React from 'react';
import styled from 'styled-components'

const StyledCertificate = styled.header`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  flex: 1;
  margin-left: 5%;
`

function Certificates() {
  return( 
    <React.Fragment>
      <h2 className="Certificates-title">Certificates-title</h2>
      <StyledCertificate>
          <span className="Certificates-item">Experience-item</span>
          <span className="Certificates-item">Experience-item</span>
      </StyledCertificate>
    </React.Fragment>
  )
}; 

export default Certificates; 