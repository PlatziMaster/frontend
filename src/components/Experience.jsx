import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const Experience = (props) => {
    const {experience} = props
    let counter = 0;
    return (
        <Col lg={'6'}>
            <Card className={'shadow mb-4'}>
                <Card.Header className={' py-4'}>
                    <h6 className="text-primary Experience-title font-weight-bold mb-0">
                        Experience
                    </h6>
                </Card.Header>
                <Card.Body className={'justify-content-center'}>
                    {

                        experience &&

                            <Tabs defaultActiveKey={experience[0].Tab} id={'tab'}>
                                {
                                    experience.map( project => {
                                        return(
                                            <Tab key = {counter} className={'Experience-item'} eventKey={project.Tab} title={project.name}>
                                                <h4 key = {counter++} className={'small font-weight-bold mt-3'}>{project.name}</h4>
                                                <p key = {counter++} className={'small text-justify'}>{project.description}</p>
                                                {
                                                    project.image &&
                                                    <img key = {counter++} src={project.image} alt={project.alt}
                                                         className={'img-fluid rounded img-thumbnail mx-auto d-block'} style={{
                                                        maxWidth: '75%'
                                                    }}/>
                                                }

                                            </Tab>
                                        )
                                    })
                                }
                            </Tabs>
                    }



                </Card.Body>
            </Card>
        </Col>
    );

}
export default Experience;