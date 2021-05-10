import React, { useContext } from 'react';
import '../styles/components/Header.styl';

import AppContext from '../utils/AppContext';

function Header({ children }) {
  const state = useContext(AppContext);

  return (
    <div className='Header'>
      <div className='Header-title'>
        <img src={state.avatar} alt='Header-profile' className='avatar' />
      </div>
      { children }
    </div>
  );
}

export default Header;
