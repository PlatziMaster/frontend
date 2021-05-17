import React from 'react';
//import PropTypes from 'prop-types';

const Profile = ({ profile }) => {
  return (
    <div>
      <h4 className='Profile-title'>Descripcion</h4>
      <p className='Profile-desc px-3'>{ profile}</p>

    </div>
  );
};

Profile.propTypes = {

};

export default Profile;
