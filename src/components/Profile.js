/** @jsx jsx */
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';

const Title = styled.h2`
    font-weight: 700;
    margin-bottom: 1.6rem;
    color: #333333;
`;

const Paragraph = styled.p`
    margin-bottom: 1.4rem;
`;

const Profile = ({ profile }) => {
  if (!profile) {
    return (
      <div className='Profile-title'>
        <div className='Profile-desc' />
      </div>
    );
  }
  return (
    <section css={css`margin-bottom: 2rem;`}>
      <Container>
        <Row>
          <Col xs={12}>
            <Title className='Profile-title'>Summary</Title>
            <div className='Profile-desc'>
              {profile.map(info => (
                <Paragraph key={uuidv4()}>{info}</Paragraph>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Profile;
