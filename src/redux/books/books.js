import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Actions
const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore-app/books/FETCH_BOOKS';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QIVXJVX8YHiH4b0gvxRR/books';

// books
const books = [];

// Reducer
const booksReducer = (state = books, action) => {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return action.payload.books;
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload.book];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book[0] !== action.payload.id);

    default:
      return state;
  }
};

// Action Creators
// add book
export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await axios.post(BASE_URL, {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    return {
      book: [
        book.id,
        [{
          author: book.author,
          title: book.title,
          category: book.category,
        }],
      ],
    };
  },
);
// remove book
export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return { id };
});
// fetch books
export const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const { data } = await axios.get(BASE_URL);
    return { books: Object.entries(data) };
  },
);

export const selectAllBooks = (state) => state.books;

export default booksReducer;
