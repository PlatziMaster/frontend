import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Profile = (props) => {
    const {description, description2, description3} = props;
    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col lg={'10'}>
                    <Card.Header className={'justify-content-center '}>
                        <h4 className={'Profile-title'}>About me</h4>
                    </Card.Header>
                    <Card border={'light'} className={'mb-4'}>
                        <Card.Body className={'d-inline-block text-justify'}>
                            <p className={'Profile-desc'}>{description}<strong>{description2}</strong>{description3}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Profile;