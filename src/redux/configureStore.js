import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
