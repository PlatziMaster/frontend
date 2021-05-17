// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Social } from '../Social';

export const ProfilePicture = ({ data }) => {
  const { avatar, name, profession, position, social } = data;
  return (
    <div className='flexcontainer'>
      <div className='centered leftboxes'>
        <div className='leftbox'>
          <img className='profilepicture' src={avatar} alt='jesuskata' />
          <h2 className='profilename'>{name}</h2>
          <p className='career'>{profession}</p>
          <p className='position'>{position}</p>
          <Social social={social} />
        </div>
      </div>
    </div>
  );
};

ProfilePicture.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};
