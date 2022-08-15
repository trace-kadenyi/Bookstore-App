import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const booksStorage = configureStore({
  rootReducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default booksStorage;
