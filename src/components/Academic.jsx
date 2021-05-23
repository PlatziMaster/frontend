import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

/*
    <h4 className={'small font-weight-bold'}>Platzi [JS] [2018-2020]</h4>
*/

const Academic = (props) => {
    const{ education }= props
    let counter = 0 
    if(education){
        console.log("hola")
        return (
            <Col lg={'6'}>
                <Card className={'shadow mb-4'}>
                    <Card.Header className={'Academic-title py-4'}>
                        <h6 className={'text-success font-weight-bold mb-0'}>Academic</h6>
                    </Card.Header>
                    <Card.Body>
                       {education.map(item =>{
                           return (
                               <h4 key={counter++} className={'small font-weight-bold'}> {item.Career +" " +item.Date}  </h4>
                           )
                       })}    
                    </Card.Body>
                </Card>
            </Col>
        );
    }else{
        return(<h1>LOADING...</h1>)
    }
}
export default Academic;
