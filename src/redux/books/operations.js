import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const topBooks = createAsyncThunk('books/top-books', async () => {
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    return response.data;
  } catch (error) {
    toast.error('something went wrong');
  }
});
export const allCategories = createAsyncThunk(
  'books/allCategories',
  async () => {
    try {
      const resposne = await axios.get(
        'https://books-backend.p.goit.global/books/category-list'
      );
      return resposne.data;
    } catch (error) {
      toast.error('something went wrong');
    }
  }
);
export const categoriesBooks = createAsyncThunk(
  'books/categoriesFilms',
  async categories => {
    try {
      const response = await axios.get(
        `https://books-backend.p.goit.global/books/category?category=${categories}`
      );
      return response.data;
    } catch (error) {
      toast.error('something went wrong');
    }
  }
);
export const bookById = createAsyncThunk('books/bookById', async id => {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    return response.data;
  } catch (error) {
    toast.error('something went wrong');
  }
});
