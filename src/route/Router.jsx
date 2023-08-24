import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import NoMatch from '../pages/NoMatch';
import StaffLoginPage from '../pages/StaffLoginPage';
import PatientLoginPage from '../pages/PatientLoginPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PatientLoginPage />} />
      <Route path="/staff" element={<StaffLoginPage />} />
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
