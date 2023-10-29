import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import MenuToggle from './MenuToggle';

function Head() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-teal-700"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <div className="container-fluid">
        <Logo />
        <MenuToggle />
        <Menu />
      </div>
    </nav>
  );
}

export default Head;
