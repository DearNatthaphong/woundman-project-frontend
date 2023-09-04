import React from 'react';
import Head from '../header/Head';
import { Outlet } from 'react-router-dom';
import Container from '../container/Container';

function AuthLayout() {
  return (
    <>
      <Head />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default AuthLayout;
