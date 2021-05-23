import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Languages = (props) => {
    const {languages} = props
    let counter = 0

    return (
        <Col lg={"6"}>
            <Card border="danger" className={'mb-2'}>
                <Card.Header>
                    <h6 className={'font-weight-bold mb-0 text-center text-danger Languages-title'}>Languages</h6>
                </Card.Header>
                <Card.Body>
                    {
                        languages &&
                        languages.map(item => {
                            return (
                                <h4 className="small font-weight-bold text-center mb-2 Languages-item"
                                    key={counter++}> {item.language + " " + item.level}</h4>
                            );
                        })
                    }
                </Card.Body>
            </Card>
        </Col>
    );
}
export default Languages;