import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Languages = (props) => {
    const {languages} = props
    let counter = 0
    if(languages){
        return (
            <Col lg = {"6"}>
                <Card border= "danger" >
                    <Card.Header>
                    <h6 className={'font-weight-bold mb-0 text-center text-danger'}>Languages</h6>
                    <Card.Body>
                        {languages.map(item =>{
                            return (<h4 className="small font-weight-bold text-center mb-2" key={counter++} > {item.laguage + " " +  item.level}</h4>)
                        })}
                    </Card.Body>

                    </Card.Header>
                </Card>
            </Col>
        )
    }else{
        return(<h1>Loadign...</h1>)
    }
}

export default Languages
