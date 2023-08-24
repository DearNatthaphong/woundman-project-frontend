// https://reactrouter.com/en/main/components/nav-link

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  // let activeClassName = "active";
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" href="#">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" end to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>

    // {/* <NavLink end to="/" >Home</NavLink>
    // <NavLink to="/about">About</NavLink>
    // <NavLink to="/dashboard">Dashboard</NavLink>
    // <NavLink to="/login">Login</NavLink> */}
    // {/* <NavLink
    //   to="/home"
    //   className={({ isActive }) => (isActive ? activeClassName : undefined)}
    // >
    //   Home
    // </NavLink>
    // <NavLinkPapp

    //   to="/about"
    //   className={({ isActive }) => (isActive ? activeClassName : undefined)}
    // >
    //   About
    // </NavLink>
    // <NavLink
    //   to="/dashboard"
    //   className={({ isActive }) => (isActive ? activeClassName : undefined)}
    // >
    //   Dashboard
    // </NavLink> */}
  );
}

export default Navbar;
