import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

function Head() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-success">
      <div className="container-fluid">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
}

export default Head;
