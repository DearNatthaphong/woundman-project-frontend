import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';
import StaffLoginPage from '../pages/StaffLoginPage';
import PatientLoginPage from '../pages/PatientLoginPage';
import { useAuth } from '../contexts/AuthContext';
import PatientListPage from '../pages/PatientListPage';
import PatientProfilePage from '../pages/PatientProfilePage';
import StaffProfilePage from '../pages/StaffProfilePage';
import Head from '../layouts/header/Head';
import TreatmentListPage from '../pages/TreatmentListPage';
import ReceiptListPage from '../pages/ReceiptListPage';
import CaseListPage from '../pages/CaseListPage';
import PaymentPage from '../pages/PaymentPage';

function Router() {
  const { patient, staff } = useAuth();
  return (
    <Routes>
      {/* patient */}
      {patient ? (
        <>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Head />} />
          <Route path="/profile" element={<PatientProfilePage />} />
          <Route path="/treatments" element={<TreatmentListPage />} />
          <Route path="/receipts" element={<ReceiptListPage />} />
        </>
      ) : (
        <Route path="/" element={<PatientLoginPage />} />
      )}

      {/* staff */}
      {staff ? (
        <>
          <Route path="/staff" element={<Head />} />
          <Route path="/staff/profile" element={<StaffProfilePage />} />
          <Route path="/patients" element={<PatientListPage />} />
          <Route path="/cases" element={<CaseListPage />} />
          <Route path="/treatments" element={<TreatmentListPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/receipts" element={<ReceiptListPage />} />
        </>
      ) : (
        <Route path="/staff" element={<StaffLoginPage />} />
      )}

      {/* no match */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Router;
