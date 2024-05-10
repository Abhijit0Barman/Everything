
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/section/mystery">Mystery</Link>
        </li>
        <li>
          <Link to="/section/technology">Technology</Link>
        </li>
        <li>
          <Link to="/section/mythology">Mythology</Link>
        </li>
        <li>
          <Link to="/section/history">History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
