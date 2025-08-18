import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './userInfoTypes';
import fetchUser from '../../../services/userInfo';

const initialState: UserState = {
  loading: false,
  error: null,
  userData: null,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state: any) => {
      (state.loading = true), (state.error = null);
    }),
      builder.addCase(fetchUser.fulfilled, (state: any, action: any) => {
        (state.loading = false), (state.userData = action.payload);
      }),
      builder.addCase(fetchUser.rejected, (state, action: any) => {
        (state.loading = false),
          (state.error = action.error || 'Error fetching user');
      });
  },
});

export default userInfoSlice.reducer;