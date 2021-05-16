import React from 'react';
import { CardDeck } from 'react-bootstrap';
import ExperienceItem from './ExperienceItem';
//import PropTypes from 'prop-types';

const Experience = ({ experience }) => {
  return (
    <div>
      <h4 className='Experience-title'>experience</h4>
      <CardDeck>
        {experience?.map((item) => {
          return <ExperienceItem key={item.id} {...item} className='Experience-item' />;
        })}
      </CardDeck>
      <span className='Experience-item' />
      <span className='Experience-item' />
      <span className='Experience-item' />
    </div>
  );
};

Experience.propTypes = {};

export default Experience;
