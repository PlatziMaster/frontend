/** @jsx jsx */
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';

const Name = styled.h1`
    font-weight: 900;
    font-size: 2.8rem;
    color: #333333;
`;

const Role = styled.h2`
    color: #888888;
    font-weight: 500;
    font-size: 1.8rem;
`;

const PersonalInfo = styled.p`
    color: #555555;

    a {
        color: #007ACC;
        text-decoration: underline;
    }
`;

const About = ({ personalInfo }) => {
  if (!personalInfo) {
    return (
      <div className='About-title'>
        <div className='About-item' />
        <div className='About-item' />
        <div className='About-item' />
      </div>
    );
  }

  const { name, role, address, phone, email, links } = personalInfo;
  return (
    <section css={css`margin-bottom: 5rem;`}>
      <Container className='About-title'>
        <Row className='justify-content-between align-items-center'>
          <Col xs='auto'>
            <Name className='About-item'>{name}</Name>
            <Role className='About-item'>{role}</Role>
          </Col>
          <Col xs='auto'>
            <PersonalInfo className='About-item'>
              {address}
              {' '}
              <br />
              {phone}
              {' '}
              <br />
              <a href={`mailto:${email}`}>{email}</a>
              {' '}
              <br />
              {links.length !== 0 && links.map(link => (
                <a key={uuidv4()} href={`${link.url}`} css={css`margin-right: 0.5rem;`} target='_blank' rel='noopener noreferrer'>{link.name}</a>
              ))}
            </PersonalInfo>
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default About;
