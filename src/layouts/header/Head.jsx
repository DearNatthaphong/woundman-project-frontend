import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import MenuToggle from './MenuToggle';

function Head() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-teal-700">
      <div className="container-fluid">
        <Logo />
        <MenuToggle />
        <Menu />
      </div>
    </nav>
  );
}

export default Head;
