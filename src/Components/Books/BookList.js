import React from 'react';
import BookItem from './BookItem';
import Form from './Form';

const BookList = ({ title, author }) => (
  <div className="booklist">
    <ul>
      <BookItem title={title} author={author} />
    </ul>
    <Form />
  </div>
);

export default BookList;
