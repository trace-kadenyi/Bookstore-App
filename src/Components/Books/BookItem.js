import React from 'react';
import './Books.css';

const BookItem = ({ title, author }) => (
  <li className="bookitem">
    <div>
      <h4 className="genre">African Literature</h4>
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
      <div className="interactions">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="percentage">
      <div className="completionCircle" />
      <h3 className="completed">64% Completed</h3>
    </div>
    <div>
      <h3 className="chapter">CURRENT CHAPTER</h3>
      <p className="verse">Chapter 17</p>
      <button type="button" className="update">UPDATE PROGRESS</button>
    </div>
  </li>
);

export default BookItem;
