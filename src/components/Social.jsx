import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/Social.styl';

const Social = ({ social }) => {
  return (
    <div className='Social'>
      <ul className='Social__list'>
        {social?.map(social => (
          <li key={social.name} className='Social__item'>
            <a href={social.url} target='_blank' rel='noreferrer'>
              <i className={`fab fa-${social.name}`} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Social.propTypes = {
  social: PropTypes.array.isRequired,
};

export default Social;
