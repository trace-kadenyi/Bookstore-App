import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import BookItem from './BookItem';
import { fetchBooks } from '../../redux/books/books';
import Form from './Form';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="booklist">
      <ul>
        {books.map((book) => (
          <BookItem
            book={book}
            key={book[0]}
            id={book[0]}
            author={book[1][0].author}
            title={book[1][0].title}
            category={book[1][0].category}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
