import React, { useContext } from 'react';
import '../styles/components/Profile.styl';

import AppContext from '../utils/AppContext';

function Profile() {
  const state = useContext(AppContext);

  return (
    <div className='Profile'>
      <h2 className='Profile-title'>Perfil</h2>
      <p className='Profile-desc'>{state.Profile}</p>
    </div>
  );
}

export default Profile;
