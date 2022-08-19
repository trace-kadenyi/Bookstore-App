import React from 'react';
import './Categories.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const myCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(checkStatus());
    e.target.style.display = 'none';
  };
  return (
    <div className="categories-container">
      <button type="button" className="status" onClick={handleClick}>Check Status</button>
      <h3 className="resolution">{myCategories}</h3>
    </div>
  );
};

export default Categories;
