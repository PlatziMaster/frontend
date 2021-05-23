import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const Academic = (props) => {
    const{ education }= props
    let counter = 0
        return (
            <Col lg={'6'}>
                <Card className={'shadow mb-4'}>
                    <Card.Header className={'py-4'}>
                        <h6 className={'text-success font-weight-bold mb-0 Academic-title'}>Academic</h6>
                    </Card.Header>
                    <Card.Body>
                       {
                           education && education.map(item =>{
                               return (
                                   <h4 key={counter++} className={'small font-weight-bold Academic-item'}> {item.Career +" " +item.Date}  </h4>
                               )
                           })
                       }
                    </Card.Body>
                </Card>
            </Col>
        );

}
export default Academic;