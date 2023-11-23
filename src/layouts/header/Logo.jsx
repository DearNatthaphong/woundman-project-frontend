import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Logo() {
  const { patient } = useAuth();
  // return <span className="navbar-brand mb-0 h1">WOUND MAN</span>;
  return (
    <Link className="navbar-brand mb-0 h1" to={patient ? '/patient' : '/staff'}>
      WOUND MAN
    </Link>
  );
}

export default Logo;
