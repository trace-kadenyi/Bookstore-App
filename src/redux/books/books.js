import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Actions
const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QIVXJVX8YHiH4b0gvxRR/books';

export const fetchBooks = createAsyncThunk('bookstore-app/books/fetchBooks', async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return [...data];
  } catch (error) {
    throw new Error(error);
  }
});

// books
const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default booksReducer;
