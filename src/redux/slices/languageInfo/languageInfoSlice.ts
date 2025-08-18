import { createSlice } from '@reduxjs/toolkit';
import { languageState } from './languageInfoTypes';

const initialState: languageState = {
  activeLanguage: 'N3',
};

const languageInfoSlice = createSlice({
  name: 'languageInfo',
  initialState,
  reducers: {
    setactiveLanguage(state, action) {
        state.activeLanguage = action.payload;
    },
  },
});

export const { setactiveLanguage } = languageInfoSlice.actions;
export default languageInfoSlice.reducer;