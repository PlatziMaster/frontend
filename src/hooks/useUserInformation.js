/** Import General Dependencies */
import { useState } from 'react';
import { getData } from '../utils/getData';
/**
 * Build the Custom Hook that have the Logic of the User Information and Principal States
 */
export default function useUserInformation() {
  const [userInfo, setUserInfo] = useState(null);

  /**
   * Function with the action of the declare the state of the figure that was selected
   * @param {object} newGeometricFigureInfo Argument that give the info of the figure that was selected
   */
  const getUserInfo = () => {
    const data = getData().then((response) => {
      console.log('response', response);
      setUserInfo(response);
    });
    return data;
  };

  return {
    userInfo,
    getUserInfo,
  };
}
