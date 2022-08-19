import React from 'react';
import swal from 'sweetalert';
import './Books.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 20);

  const handleRemove = () => {
    dispatch(removeBook(id));
    swal('Done!', `${title} has been successfully removed`, 'success');
  };

  return (
    <li className="bookitem">
      <div className="head-section">
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
          styles={buildStyles({
            textColor: 'black',
            pathColor: '#8c0b3d',
          })}
          value={progress}
          text={`${progress}%`}
        />

        <span className="span">Completed</span>
      </div>
      <div>
        <h3 className="chapter">CURRENT CHAPTER</h3>
        <p className="verse">
          Chapter
          {' '}
          { chapter }
        </p>
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
