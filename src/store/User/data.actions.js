export const USER_ACTION = {
  SET_DATA: '[USER] SET-DATA',
};

export const setUserData = userData => ({
  type: USER_ACTION.SET_DATA,
  payload: {
    userData,
  },
});
