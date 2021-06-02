import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { WrapperProfile } from '../styles/components/ProfileStyle';

const Profile = () => {
  const data = useContext(AppContext);

  return (
    <WrapperProfile>
      <h2 className='Profile-title'>Profile</h2>
      <div>
        <div className='Profile-desc'>
          <p>
            {data.data?.profile}
          </p>
        </div>
      </div>

    </WrapperProfile>
  );
};

export default Profile;
