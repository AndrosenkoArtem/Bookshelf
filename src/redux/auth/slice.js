import { createSlice } from '@reduxjs/toolkit';
import { signIn, logout, refreshUser, signUp } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, actions) => {
        state.error = null;
      })
      .addCase(signUp.rejected, (state, actions) => {
        state.error = actions.payload;
      })
      .addCase(signIn.fulfilled, (state, actions) => {
        state.error = null;
        state.isLoggedIn = true;
        state.user = actions.payload.userData.user;
        state.token = actions.payload.token;
      })
      .addCase(signIn.rejected, (state, actions) => {
        state.error = actions.payload;
        state.isLoggedIn = false;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
      })
      .addCase(logout.rejected, (state, actions) => {
        state.error = actions.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, actions) => {
        state.error = null;
        state.isLoggedIn = true;
        state.user = actions.payload.user;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, actions) => {
        state.isRefreshing = false;
        state.error = actions.payload;
      }),
});
export const authReducer = authSlice.reducer;
