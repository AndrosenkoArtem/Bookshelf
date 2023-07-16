import { allCategories, categoriesBooks, topBooks } from './operations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  categories: [],
  isLoading: false,
  error: null,
};
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(topBooks.fulfilled, (state, actions) => {
        state.books = actions.payload;
      })
      .addCase(topBooks.rejected, (state, actions) => {
        state.error = actions.payload;
      })
      .addCase(allCategories.fulfilled, (state, actions) => {
        state.categories = actions.payload;
      })
      .addCase(allCategories.rejected, (state, actions) => {
        state.error = actions.payload;
      })
      .addCase(categoriesBooks.fulfilled, (state, actions) => {
        state.books = actions.payload;
      })
      .addCase(categoriesBooks.rejected, (state, actions) => {
        state.error = actions.payload;
      }),
});
export const booksReducer = booksSlice.reducer;
