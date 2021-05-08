/* eslint-disable no-param-reassign */
import produce from 'immer';
import { USER_ACTION } from './data.actions';

export const USER_INITIAL_STATE = {
  data: {
    name: '',
    profession: '',
    address: '',
    email: '',
    website: '',
    phone: '',
    avatar: '',
    Profile: '',
    certificate: [],
    Academic: [],
    experience: [],
    skills: [],
    interest: [],
    languages: [],
    social: [],
  },
};

const userDataReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION.SET_DATA:
      draft.data = payload.userData.data;
      break;
    default:
      break;
  }
}, USER_INITIAL_STATE);

export default userDataReducer;
