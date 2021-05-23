import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Row from  'react-bootstrap/Row';

const Interest = (props) => {
    const {interests}= props
    let counter = 0
    if(interests){
        return (
                 <Col lg = {"6"}>
                    <Card border= "warning" >
                        <Card.Header>
                        <h6 className={'font-weight-bold mb-0 text-center text-warning'}>Languages</h6>
                        <Card.Body>
                            <Row>
                                {interests.map(item =>{
                                    return ( <Col> 
                                                <h4 className="small font-weight-bold text-center mb-2" key={counter++} > {item.topic1}</h4>
                                                <h4 className="small font-weight-bold text-center mb-2" key={counter++} > {item.topic2}</h4>
                                            </Col>)
                                })}
                            </Row>
                        </Card.Body>
    
                        </Card.Header>
                    </Card>
                </Col>
            
        )
    }else{
        return(<h1>Loading...</h1>)
    }

}

export default Interest
