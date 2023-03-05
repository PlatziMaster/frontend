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

const Paragraph = styled.p`
    margin-bottom: 1.4rem;
`;

const ExperienceTitle = styled.h3`
    font-weight: 900;
    color:#333333;
    font-size:1.5rem;
`;

const CompanyInfo = styled.p`
    font-size:1.2rem;
    margin-bottom:0.5rem;
`;

const DateInfo = styled.p`
    font-size:1.2rem;
`;

const Experience = ({ experience }) => {
  if (!experience) {
    return (
      <div className='Experience-title'>
        <div className='Experience-item' />
        <div className='Experience-item' />
        <div className='Experience-item' />
      </div>
    );
  }
  return (
    <section css={css`margin-bottom: 2rem;`}>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionTitle className='Experience-title'>Experience</SectionTitle>
            {experience.map(experienceInfo => (
              <ExperienceInfo key={uuidv4()} experienceInfo={experienceInfo} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const ExperienceInfo = ({ experienceInfo }) => {
  const {
    title,
    companyName,
    location,
    startDate,
    endDate,
    time,
    description,
  } = experienceInfo;

  return (
    <div className='Experience-item'>
      <ExperienceTitle>{title}</ExperienceTitle>
      <CompanyInfo>
        {companyName}
        {' '}
        -
        {' '}
        {location}
      </CompanyInfo>
      <DateInfo>
        {startDate}
        {' '}
        -
        {' '}
        {endDate}
        {' '}
        (
        {time}
        )
      </DateInfo>
      {description?.map(paragraph => (
        <Paragraph key={uuidv4()}>{paragraph}</Paragraph>
      ))}
    </div>
  );
};

export default Experience;
