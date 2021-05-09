/** Import General Dependecies */
import React, { createContext } from 'react';

/** Import Custom Hook */
import useUserInformation from '../hooks/useUserInformation';

const UserInformationContext = createContext();

/**
 * Build Provider of the Modal Context
 * @param {*} children Argument that have the components into of the this context
 */
const UserInformationProvider = ({ children }) => {
  const { userInfo, getUserInfo } = useUserInformation();
  return (
    <UserInformationContext.Provider value={{ userInfo, getUserInfo }}>
      {children}
    </UserInformationContext.Provider>
  );
};

/** Exports */
export { UserInformationProvider };
export default UserInformationContext;
