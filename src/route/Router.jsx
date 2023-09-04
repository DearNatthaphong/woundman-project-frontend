import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NoMatch from '../pages/NoMatch';
import StaffLoginPage from '../pages/StaffLoginPage';
import PatientLoginPage from '../pages/PatientLoginPage';
import { useAuth } from '../contexts/AuthContext';
import PatientListPage from '../pages/PatientListPage';
import PatientProfilePage from '../pages/PatientProfilePage';
import StaffProfilePage from '../pages/StaffProfilePage';
import TreatmentListPage from '../pages/TreatmentListPage';
import ReceiptListPage from '../pages/ReceiptListPage';
import CaseListPage from '../pages/CaseListPage';
import PaymentPage from '../pages/PaymentPage';
import AuthLayout from '../layouts/auth/AuthLayout';
import AppointmentPage from '../pages/AppointmentPage';

function Router() {
  const { patient, staff } = useAuth();
  return (
    <Routes>
      {/* patient */}
      {patient ? (
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<AppointmentPage />} />
          <Route path="/profile" element={<PatientProfilePage />} />
          <Route path="/treatments" element={<TreatmentListPage />} />
          <Route path="/receipts" element={<ReceiptListPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<PatientLoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}

      {/* staff */}
      {staff ? (
        <Route path="/" element={<AuthLayout />}>
          <Route path="/staff" element={<AppointmentPage />} />
          <Route path="/staff/profile" element={<StaffProfilePage />} />
          <Route path="/patients" element={<PatientListPage />} />
          <Route path="/cases" element={<CaseListPage />} />
          <Route path="/treatments" element={<TreatmentListPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/receipts" element={<ReceiptListPage />} />
          <Route path="*" element={<Navigate to="/staff" />} />
        </Route>
      ) : (
        <>
          <Route path="/staff" element={<StaffLoginPage />} />
          <Route path="*" element={<Navigate to="/staff" />} />
        </>
      )}
      {/* no match */}
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default Router;
