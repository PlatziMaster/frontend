import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
//import PropTypes from 'prop-types';
// Estilos
import '../styles/components/Experience.styl';

const Experience = ({ experience }) => {
  return (
    <>
      <h4 className='Experience-title'>Experiencia</h4>
      <CardDeck>
        {
          experience?.map((item) => {
            return (
              <Card key={item.company} className='bg-transparent'>
                <Card.Header className='Card-title text-center'>{item.jobTitle}</Card.Header>
                <Card.Body>
                  <Card.Subtitle className='Card-subTitle'>{item.company}</Card.Subtitle>
                  <Card.Text className='Card-text text-dark'>{item.jobDescription}</Card.Text>
                </Card.Body>
                <Card.Footer className='py-1 '>
                  <Card.Text className='Card-text text-center text-dark'>
                    {' '}
                    {item.startDate}
                    {' '}
                    -
                    {' '}
                    {item.endDate}
                  </Card.Text>

                </Card.Footer>
              </Card>
            );
          })

        }
      </CardDeck>
      <span className="Experience-item"></span>
      <span className="Experience-item"></span>
      <span className="Experience-item"></span>

    </>

  );
};

Experience.propTypes = {

};

export default Experience;
