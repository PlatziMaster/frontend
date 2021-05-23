import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = props => {
    const {image, children } = props;
    return (
        <Container fluid>
            <Row>
                <Col xs={'12'} className={'mb-4'}>
                    <h3 className={'Header-title font-italic text-center mt-2'}>Portfolio</h3>
                    <hr/>
                </Col>
                <Col className={'justify-content-center mb-4'} lg={'5'} >

                    <img src={image} alt="My pic" className={'rounded-circle mx-auto d-block'} style={{
                        width: '170px',
                        height: '175px'
                    }}/>

                </Col>
                {children}

            </Row>
        </Container>

    );
}
export default Header