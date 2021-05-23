import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

const Skills = (prop) => {
    const {skills} = prop;
    const Colors = [
        'Primary',
        'Success',
        'Info',
        'Secondary',
    ];
    const Icons = [
        faBook,
        faGithub,
        faReact,
        faUsers
    ];
    let counter = 0;
    return (
        <>
            <Col xs={'12'}>
                <hr/>
                <h2 className={'text-dark font-weight-bold text-center mb-4 Skills-title'}>Special skills</h2>
            </Col>
            {
                skills && skills.map(skill => {
                    let index = counter % Colors.length;
                    return (
                        <Col key={counter} md={'6'} xl={'3'} className={'mb-4 Skills-item'}>
                            <Card variant={Colors[index].toLowerCase()}
                                  className={'shadow py-2 border-' + Colors[index].toLowerCase()}>
                                <Card.Body>
                                    <Row className={'align-items-center no-gutters'}>
                                        <Col className={'me-2'}>
                                            <div
                                                className={'text-uppercase font-weight-bold mb-1 text-' + Colors[index].toLowerCase()}>
                                            <span>
                                                {skill.Skill}
                                            </span>
                                            </div>
                                            <div className={'text-dark font-weight-bold h5 mb-0'}>
                                                <span>{skill.Description}</span>
                                            </div>
                                        </Col>
                                        <Col className={'col-auto'}>
                                            <FontAwesomeIcon icon={Icons[counter++ % Icons.length]}/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                    );
                })

            }
        </>
    );


}
export default Skills;