import React from 'react';
import { data } from '../../../data.json';
import { ProfileStore } from '../../store/ProfileStore';

const MockProfileContext = ({ children }) => {
  return <ProfileStore.Provider value={data}>{children}</ProfileStore.Provider>;
};

export default MockProfileContext;
