import { bookById, categoriesBooks, topBooks } from './operations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topBooks: [],
  booksByCategory: [],
  bookById: {},
  categories: [],
  catalogBooks: [],
  isLoading: false,
  error: null,
};
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooksInCatalog(state, actions) {
      state.catalogBooks.push(actions.payload);
    },
    deleteBookInCatalog(state, actions) {
      state.catalogBooks = state.catalogBooks.filter(
        book => book._id !== actions.payload
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(topBooks.pending, state => {
        state.isLoading = true;
      })
      .addCase(topBooks.fulfilled, (state, actions) => {
        state.booksByCategory = [];
        state.categories = actions.payload.map(book => book.list_name);
        state.topBooks = actions.payload;
        state.isLoading = false;
      })
      .addCase(topBooks.rejected, (state, actions) => {
        state.error = actions.payload;
        state.isLoading = false;
      })
      .addCase(categoriesBooks.pending, state => {
        state.isLoading = true;
      })
      .addCase(categoriesBooks.fulfilled, (state, actions) => {
        state.topBooks = [];
        state.booksByCategory = actions.payload;
        state.isLoading = false;
      })
      .addCase(categoriesBooks.rejected, (state, actions) => {
        state.error = actions.payload;
        state.isLoading = false;
      })
      .addCase(bookById.fulfilled, (state, actions) => {
        state.bookById = actions.payload;
      }),
});
export const { addBooksInCatalog, deleteBookInCatalog } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
