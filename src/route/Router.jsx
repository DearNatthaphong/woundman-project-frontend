import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';
import StaffLoginPage from '../pages/StaffLoginPage';
import PatientLoginPage from '../pages/PatientLoginPage';
import { useAuth } from '../contexts/AuthContext';

function Router() {
  const { patient, staff } = useAuth();
  return (
    <Routes>
      <Route path="/" element={patient ? <Home /> : <PatientLoginPage />} />
      <Route path="/staff" element={staff ? <Home /> : <StaffLoginPage />} />
      {/* Other routes based on user roles */}
      <Route path="*" element={<NoMatch />} />

      {/* <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Route> */}
    </Routes>
  );
}

export default Router;
