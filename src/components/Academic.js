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

const Info = styled.p`
    span {
        font-weight: 900;
        color: #333333;
    }
`;

const Academic = ({ academic }) => {
  if (!academic) {
    return (
      <div className='Academic-title'>
        <div className='Academic-item' />
        <div className='Academic-item' />
        <div className='Academic-item' />
      </div>
    );
  }

  return (
    <section css={css`margin-bottom: 2rem;`}>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionTitle className='Academic-title'>Education</SectionTitle>
            {academic.map(academicInfo => (
              <AcademicInfo key={uuidv4()} academicInfo={academicInfo} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const AcademicInfo = ({ academicInfo }) => {
  const {
    school,
    degree,
    fieldOfStudy,
    startDate,
    endDate,
  } = academicInfo;

  return (
    <Info className='Academic-item'>
      <span>{school}</span>
      {' '}
      -
      {' '}
      {degree}
      ,
      {' '}
      {fieldOfStudy}
      .
      {' '}
      {startDate}
      {' '}
      -
      {' '}
      {endDate}
    </Info>
  );
};

export default Academic;
