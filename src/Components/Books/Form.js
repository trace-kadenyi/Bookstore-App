import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
      progress: 7,
      chapter: 'Chapter 5',
      genre: 'African Literature',
    };
    if (title.length && author.length) {
      dispatch(addBook(book));
      swal('Done!', 'Book successfully added!', 'success');
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <form onSubmit={handleAdd}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        id="title"
        value={title}
        placeholder="BOOK TITLE"
        required
      />
      <input
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        name="author"
        id="author"
        value={author}
        placeholder="AUTHOR"
        required
      />
      <button
        type="submit"
        className="submit"
      >
        ADD BOOK
      </button>
    </form>
  );
};

export default Form;
