import React from 'react';
import '../styles/components/Opacity.styl';
import { Carousel, Card, Badge } from 'react-bootstrap';
//import PropTypes from 'prop-types';

const Academic = ({ certificate, Academic }) => {
  return (
    <div>
      <h4 className='Academic-title'> Estudios</h4>
      {Academic?.map(({ degree, description, endDate, institution, startDate }) => {
        return (
          <Card key={degree} className='Academic-item border-0'>
            <Card.Body className='pb-2'>
              <Card.Title>{degree}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>{institution}</Card.Subtitle>
              <Card.Text className=''>{description}</Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-between px-3 pb-3 mx-1 mb-1'>
              <Badge variant='secondary'>
                {startDate}
              </Badge>

              <Badge variant='success'>{endDate}</Badge>
            </div>
          </Card>
        );
      })}

      <h4 className='Certificate-title'> Certificados</h4>
      <Carousel className='px-3'>
        {certificate?.map((item) => {
          return (
            <Carousel.Item interval={1000} key={item.name} className='certificate-item'>
              <img
                className='d-block w-100'
                src={item.img}
                alt='First slide'
              />
              <Carousel.Caption className='bg-dark o-80  d-block'>
                <h5 className='text-light'>{item.name }</h5>
                <h6 className='d-block text-white text-italic'>{item.institution}</h6>
                <span className='text-white text-monospace'>{item.date}</span>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}

      </Carousel>

      <span className='Academic-item' />
      <span className='Academic-item' />
      <span className='Academic-item' />
    </div>
  );
};

Academic.propTypes = {};

export default Academic;
