import React from 'react';
//import PropTypes from 'prop-types';
import { Card, Badge } from 'react-bootstrap';

const ExperienceItem = ({
  company,
  endDate,
  jobDescription,
  jobTitle,
  startDate,
}) => {
  return (
    <Card>
      <Card.Body className='pb-2'>
        <Card.Title>{jobTitle}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{company}</Card.Subtitle>
        <Card.Text className=''>{jobDescription}</Card.Text>
      </Card.Body>
      <div className='d-flex justify-content-between px-3 pb-3 mx-1 mb-1'>
        <Badge variant='secondary'>
          {startDate}
        </Badge>

        <Badge variant='success'>{endDate}</Badge>
      </div>
    </Card>
  );
};

ExperienceItem.propTypes = {};

export default ExperienceItem;
