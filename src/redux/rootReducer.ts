import { combineReducers } from '@reduxjs/toolkit';
import userInfoReucer from './slices/userInfo/userInfoSlice';
import languageInfoReducer from './slices/languageInfo/languageInfoSlice';

const rootReducer = combineReducers({
  userInfo: userInfoReucer,
  languageInfo: languageInfoReducer,
});
export default rootReducer;
