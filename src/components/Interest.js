/** @jsx jsx */
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';

const SectionTitle = styled.h2`
    font-weight: 700;
    margin-bottom: 1.6rem;
    color: #333333;
`;

const InterestInfo = styled.p`
    span {
        font-weight: 900;
        color: #333333;
    }
`;

const Interest = ({ interests }) => {
  if (!interests) {
    return (
      <div className='Interest-title'>
        <div className='Interest-item' />
        <div className='Interest-item' />
        <div className='Interest-item' />
      </div>
    );
  }

  return (
    <section css={css`margin-bottom: 2rem;`}>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionTitle className='Interest-title'>Interest</SectionTitle>
            {interests.map(interest => (
              <InterestInfo key={uuidv4()} className='Interest-item'>{interest}</InterestInfo>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Interest;
