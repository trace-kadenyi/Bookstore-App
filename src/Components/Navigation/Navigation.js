import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <div className="header-container">
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <div>
        <FaUser className="userIcon" />
      </div>
      <div>
        <nav>
          <ul className="nav">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
