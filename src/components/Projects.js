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

const ProjectTitle = styled.h3`
    font-weight: 900;
    color:#333333;
    font-size:1.5rem;
    margin-bottom: 1rem;
`;

const Projects = ({ projects }) => {
  if (!projects) return <div />;
  return (
    <section css={css`margin-bottom: 2rem;`}>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionTitle>Projects</SectionTitle>
            {projects.map(projectInfo => (
              <ProjectInfo key={uuidv4()} projectInfo={projectInfo} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const ProjectInfo = ({ projectInfo }) => {
  const {
    title,
    description,
  } = projectInfo;

  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      {description?.map(paragraph => (
        <Paragraph key={uuidv4()}>{paragraph}</Paragraph>
      ))}
    </>
  );
};

export default Projects;
