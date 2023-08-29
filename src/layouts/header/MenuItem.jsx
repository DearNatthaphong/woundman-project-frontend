import React from 'react';
import Home from '../../pages/Home';
import { Link } from 'react-router-dom';

function MenuItem({ to, active, children }) {
  return (
    <li className="nav-item">
      <Link
        to={to}
        className={`px-2 nav-link${active ? '' : ' hover-bg-gray-200'}`}
        aria-current="page"
      >
        {children}
      </Link>
    </li>
  );
}

export default MenuItem;
