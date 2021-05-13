import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Wrapper } from '../styles/components/Wrapperfull';

const Profile = () => {
  const data = useContext(AppContext);

  return (
    <Wrapper>
      <h3 className='Profile-title'>Profile</h3>
      <div>
        <div className='Profile-desc'>
          <p>
            {data.profile}
          </p>
        </div>
      </div>

    </Wrapper>
  );
};

export default Profile;
