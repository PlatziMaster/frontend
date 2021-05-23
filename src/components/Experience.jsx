import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const Experience = (props) => {
    const { experience } = props
    if(experience){
        console.log(experience)
        return(
            <Col lg={'6'}>
                <Card className={'shadow mb-4'}>
                    <Card.Header className={'Experience-title py-4'}>
                        <h6 className="text-primary font-weight-bold mb-0">
                            Experience
                        </h6>
                    </Card.Header>
                    <Card.Body className={'justify-content-center'}>
                        <Tabs defaultActiveKey={'Game'} id={'tab'}>
                            <Tab eventKey={'Game'} title={'Game'}>
                                <h4 className={'small font-weight-bold mt-3'}>{experience[0].name}</h4>
                                <p className={'small text-justify'}>{experience[0].description}</p>
                                <img src={experience[0].image} alt="Space Hunter image" className={'img-fluid rounded img-thumbnail mx-auto d-block'} style={{
                                maxWidth: '75%'
                            }}/>
                            </Tab>
                            <Tab eventKey={'system'} title={'School web system'}>
                                <h4 className={'small font-weight-bold mt-3'}>{experience[1].name}</h4>
                                <p className={'small text-justify'}>{experience[1].description}</p>
                                <img src={experience[1].image} alt="School web system image" className={'img-fluid rounded img-thumbnail mx-auto d-block'} style={{
                                maxWidth: '80%'
                            }}/>    
                            </Tab>
    
                        </Tabs>
    
    
                    </Card.Body>
                </Card>
            </Col>
        );
    }else{
        return(<h1>Loading...</h1>)
    }
}
export default Experience;
