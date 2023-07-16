import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const topBooks = createAsyncThunk(
  'https://books-backend.p.goit.global/books/top-books',
  async () => {
    try {
      const response = await axios.get(
        'https://books-backend.p.goit.global/books/top-books'
      );
      return response.data;
    } catch (error) {
      toast.error('something went wrong');
    }
  }
);
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
// https://books-backend.p.goit.global/books/category?category=Combined%20Print%20and%20E-Book%20Nonfiction
