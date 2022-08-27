import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    if (title.length && author.length && category) {
      dispatch(addBook(book));
      swal('Done!', `${title} has been successfully added`, 'success');
      setTitle('');
      setAuthor('');
      setCategory('');
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
      <select name="categories" id="categories" onChange={(e) => setCategory(e.target.value)}>
        <option disabled selected value> -- Select category -- </option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="African Literature">African Literature</option>
        <option value="Classics">Classics</option>
        <option value="Historical">Historical</option>
        <option value="Literary Fiction">Literary Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Romantic Suspence">Romantic Suspence</option>
        <option value="Romance">Romance</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Thriller">Thriller</option>
      </select>
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
