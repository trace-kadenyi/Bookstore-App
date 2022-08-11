import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './Components/Books/BookList';
import Categories from './Components/Categories/Categories';
import Navbar from './Components/Navigation/Navigation';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BookList title="Purple Hibiscus" author="Chimamanda Ngozi" />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
