/** @jsx jsx */
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';

const SectionTitle = styled.h2`
    font-weight: 700;
    margin-bottom: 1.6rem;
    color: #333333;
`;

const Skill = styled.p`
    span {
        font-weight: 900;
        color: #333333;
    }
`;

const Skills = ({ skills }) => {
  if (!skills) {
    return (
      <div className='Skills-title'>
        <div className='Skills-item' />
        <div className='Skills-item' />
        <div className='Skills-item' />
      </div>
    );
  }
  const {
    programmingLaguanges,
    frameworksAndTools,
    soft,
    agile,
  } = skills;

  return (
    <section css={css`margin-bottom: 2rem;`}>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionTitle className='Skills-title'>Skills</SectionTitle>
            <Skill className='Skills-item'>
              <span>Programming Languages:</span>
              {' '}
              {programmingLaguanges.join(', ')}
              .
            </Skill>
            <Skill className='Skills-item'>
              <span>Frameworks And Tools:</span>
              {' '}
              {frameworksAndTools.join(', ')}
              .
            </Skill>
            <Skill className='Skills-item'>
              <span>Soft:</span>
              {' '}
              {soft.join(', ')}
              .
            </Skill>
            <Skill className='Skills-item'>
              <span>Agile:</span>
              {' '}
              {agile.join(', ')}
              .
            </Skill>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
