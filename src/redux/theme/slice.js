import { createSlice } from '@reduxjs/toolkit';
export const themeSlice = createSlice({
  name: true,
  initialState: { theme: false },
  reducers: {
    changeTheme(state, actions) {
      state.theme = actions.payload;
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
