import { v4 as uuidv4 } from 'uuid';
// Actions
const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';

// books
const books = [
  {
    id: uuidv4(),
    title: 'Stay with Me',
    author: 'Ayobami Adebayo',
    progress: 64,
    genre: 'African Literature',
    chapter: 17,
  },
  {
    id: uuidv4(),
    title: 'The Hunger Games Trilogy',
    author: 'Nora Roberts',
    progress: 43,
    genre: 'Science Fiction (Sci-Fi)',
    chapter: 12,
  },
  {
    id: uuidv4(),
    title: 'The Call of the Wild',
    author: 'Jack London',
    progress: 7,
    genre: 'Adventure',
    chapter: 5,
  },
  {
    id: uuidv4(),
    title: 'Circe',
    author: 'Madeline Miller',
    progress: 64,
    genre: 'Fantasy',
    chapter: 8,
  },
  {
    id: uuidv4(),
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee',
    progress: 64,
    genre: 'Classics',
    chapter: 9,
  },
];

// Reducer

const booksReducer = (state = books, action) => {
  const index = state.findIndex((book) => book.id === action.id);
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;
