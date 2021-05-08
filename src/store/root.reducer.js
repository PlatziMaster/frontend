import { combineReducers } from '@reduxjs/toolkit';
import userDataReducer from './User/data.reducer';

const rootReducer = combineReducers({
  user: userDataReducer,
});

export default rootReducer;
