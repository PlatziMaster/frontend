import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = props => {
    const {image, children } = props;
    return (
        <Container fluid>
            <Row>
                <Col className={'justify-content-center mb-4'} >
                    <h3 className={'Header-title font-italic text-center'}>Portfolio</h3>
                    <hr/>
                    <img src={image} alt="no salio" className={'rounded-circle mx-auto d-block'} style={{
                        width: '200px',
                        height: '200px'
                    }}/>   
                
                </Col>
            </Row>
            {children}
        </Container>

    );
}
export default Header

