import React from 'react';
// import PropTypes from 'prop-types';
// Bootstrap
import { CardDeck, Card } from 'react-bootstrap';
// Estilos
import '../styles/components/Academic.styl';

const Academic = ({ certificate, Academic }) => {
  return (
    <div>
      <h4 className='Academic-title'>Academia</h4>
      <CardDeck>
        {Academic?.map((item) => {
          return (
            <Card key={item.degree} className='bg-transparent'>
              <Card.Header className='Card-title text-center'>
                {item.degree}
              </Card.Header>
              <Card.Body>
                <Card.Subtitle className='Card-subTitle text-dark'>
                  {item.institution}
                </Card.Subtitle>
                <Card.Text className='Card-text text-dark'>{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer className='py-1'>
                <Card.Text className='Card-text text-center text-dark'>
                  {' '}
                  {item.startDate}
                  {' '}
                  -
                  {item.endDate}
                </Card.Text>
              </Card.Footer>
            </Card>
          );
        })}
      </CardDeck>
      <span className="Academic-item"></span>
      <span className="Academic-item"></span>
      <span className="Academic-item"></span>
      {/* <h4 className="Academic-title">Certificados</h4>
      <CardColumns>
        {certificate?.map((item, id) => {
          return (
            <Card key={id} className="bg-transparent">
              <Card.Header className="Card-title text-center">
                {item.name}
              </Card.Header>
              <Card.Body>
                <Card.Subtitle className="Card-subTitle text-dark">
                  {item.institution}
                </Card.Subtitle>

                <Card.Text className="Card-text text-dark">{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="py-1">
                <Card.Text className="Card-text text-center text-dark">
                  {' '}
                  {item.date}
                </Card.Text>
              </Card.Footer>
            </Card>
          );
        })}
      </CardColumns> */}
    </div>
  );
};

export default Academic;
