import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import getData from '../utils/getData.js';
import { Row, Col,Container } from 'react-bootstrap';

const App = () => {
  const [Info, setInfo] = useState({});

  useEffect(() => {
    getData('http://localhost:3000/data').then(resp => {
      setInfo(resp);
    });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
        <Header {...Info}>
          <About {...Info} />
        </Header>
        </Col>
      </Row>
      <Row>
        <Col>
        <Profile {...Info} />
        </Col>
      </Row>
      <Row>
        <Col>
        <Experience {...Info} />
        </Col>
      </Row>

      <Row>
        <Col sx={12} md={6}>
          <Academic {...Info} />
        </Col>
        <Col sx={12} md={6}>
          <Skills {...Info} />
        </Col>
      </Row>
      <Row>
        <Col sx={12} md={6}>
          <Interest {...Info} />
        </Col>
        <Col sx={12} md={6}>
          <Languages {...Info} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
