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

const LanguageInfo = styled.p`
    span {
        font-weight: 900;
        color: #333333;
    }
`;

const Languages = ({ languages }) => {
  if (!languages) {
    return (
      <div className='Languages-title'>
        <div className='Languages-item' />
        <div className='Languages-item' />
        <div className='Languages-item' />
      </div>
    );
  }

  return (
    <section css={css`margin-bottom: 2rem;`}>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionTitle className='Languages-title'>Languages</SectionTitle>
            {languages.map(Language => (
              <LanguageInfo key={uuidv4()} className='Languages-item'>{Language}</LanguageInfo>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Languages;
