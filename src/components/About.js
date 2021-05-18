import React from 'react';
import { Row } from 'react-bootstrap';

//import PropTypes from 'prop-types';

const About = ({ social }) => {
  return (
    <Row>
      {social?.map(({ name, url }) => {
        return (
          <a
            key={name}
            href={url}
            className='float-left ml-3 '
            target='_blank'
            rel='noreferrer'
          >
            <h5>
              {name}
            </h5>
          </a>
        );
      })}
      <span className="About-title"></span>
      <span className="About-item"></span>
      <span className="About-item"></span>
      <span className="About-item"></span>

    </Row>
  );
};

About.propTypes = {};

export default About;
