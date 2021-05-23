import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';

const Interest = (props) => {
    const {interests} = props
    let counter = 0
    return (
        <Col lg={"6"}>
            <Card border="warning">
                <Card.Header>
                    <h6 className={'font-weight-bold mb-0 text-center text-warning Interest-title'}>Interests</h6>
                    <Card.Body>
                        <Row>
                            {
                                interests && interests.map(item => {
                                return (
                                    <Col key={counter}>
                                        <h4 className="small font-weight-bold text-center mb-2 Interest-item"
                                            key={counter++}> {item.topic1}</h4>
                                        <h4 className="small font-weight-bold text-center mb-2 Interest-item"
                                            key={counter++}> {item.topic2}</h4>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Card.Body>

                </Card.Header>
            </Card>
        </Col>

    )


}

export default Interest