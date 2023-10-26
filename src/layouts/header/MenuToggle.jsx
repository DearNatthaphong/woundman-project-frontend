import React from 'react';

function MenuToggle() {
  return (
    <button
      className="navbar-toggler collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample04"
      aria-controls="navbarsExample04"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

export default MenuToggle;
