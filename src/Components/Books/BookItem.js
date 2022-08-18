import React from 'react';
import swal from 'sweetalert';
import './Books.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = ({
  id, title, author, category
}) => {
  const dispatch = useDispatch();
  let progress = Math.floor(Math.random() * 100);
  let chapter = Math.floor(Math.random() * 20);

  const handleRemove = () => {
    dispatch(removeBook(id));
    swal('Done!', `${title} successfully removed`, 'success');
  };

  return (
    <li className="bookitem">
      <div>
        <h4 className="genre">{category}</h4>
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
        <CircularProgressbar
          style={{ width: 65, height: 65 }}
          value = {progress}
          text={`${progress}%`}
        />
        Completed
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
  category: PropTypes.string.isRequired,
};

export default BookItem;
