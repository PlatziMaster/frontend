import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import getData from '../utils/getData.js';

import { Container,Row,Col } from 'react-bootstrap';


const App = () => {
  const [Info, setInfo] = useState({});

  useEffect(() => {
    getData('http://localhost:3000/data').then(resp => {
      setInfo(resp);
    });
  }, []);

  return (
    <Container fluid >
      <Row class="justify-content-md-center" display>
        <Header {...Info}>
          <About {...Info} />
        </Header>
      </Row>

      <Row>
        <Profile {...Info} />
      </Row>

      <Row>
        <Experience {...Info} />
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Academic {...Info} />
        </Col>
        <Col xs={12} md={6}>
          <Skills {...Info} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Interest {...Info} />
        </Col>
        <Col xs={12} md={6} className="d-flex">
          <Languages {...Info} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
