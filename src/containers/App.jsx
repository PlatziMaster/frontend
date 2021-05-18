import React, { useEffect, useState } from 'react';

// Estilos
import '../styles/components/App.styl';
// Componentes
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
// Datos
import getData from '../utils/getData';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';



const App = () => {

  const [datosUsuario, setdatosUsuario] = useState({})
  
  useEffect(() => {
    getData('http://localhost:3000/data')
        .then((resp) => setdatosUsuario(resp))
  }, []);
  return (
    <Container className="Content">
      <Row>
        <Col>
          <Header {...datosUsuario}>
            <About {...datosUsuario}/>
          </Header>
          <Profile {...datosUsuario}/>
          <Experience {...datosUsuario}/>
          <Academic {...datosUsuario}/>
          <Skills {...datosUsuario}/>
          <Interest {...datosUsuario}/>
          <Languages {...datosUsuario}/> 
        </Col>
      </Row>
    </Container>
  )
};

export default App;
