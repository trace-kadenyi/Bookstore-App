import React from 'react';
import './Books.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = ({
  id, title, author, progress, chapter, genre,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="bookitem">
      <div>
        <h4 className="genre">{genre}</h4>
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>
        <div className="interactions">
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={handleRemove}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="percentage">
        <div className="completionCircle" />
        <h3 className="completed">
          {progress}
          % Completed
        </h3>
      </div>
      <div>
        <h3 className="chapter">CURRENT CHAPTER</h3>
        <p className="verse">{chapter}</p>
        <button type="button" className="update">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default BookItem;
