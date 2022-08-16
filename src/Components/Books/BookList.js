import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import BookItem from './BookItem';
import Form from './Form';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="booklist">
      <ul>
        {books.map((book) => (
          <BookItem
            book={book}
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
            chapter={book.chapter}
            progress={book.progress}
            genre={book.genre}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
