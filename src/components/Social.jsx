import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Social = ({ social }) => {
  const icons = [
    faTwitterSquare,
    faFacebookSquare,
    faGithubSquare,
    faLinkedin,
  ];
  return (
    <div className='Social'>
      {social &&
        social.map((item, index) => (
          <div className='Social-item' key={`${item.name}`}>
            <a href={item.url}>
              <FontAwesomeIcon icon={icons[index]} />
              <p>
                <small>{item.name}</small>
              </p>
            </a>
          </div>
        ))}
    </div>
  );
};

export default Social;
