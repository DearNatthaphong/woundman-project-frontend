import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import StaffLoginPage from '../pages/StaffLoginPage';
import PatientLoginPage from '../pages/PatientLoginPage';
import { useAuth } from '../contexts/AuthContext';
import PaymentPage from '../pages/PaymentPage';
import AuthLayout from '../layouts/auth/AuthLayout';
import ProfilePage from '../pages/ProfilePage';
import PatientPage from '../pages/PatientPage';
import CasePage from '../pages/CasePage';
import CaseDetailPage from '../pages/CaseDetailPage';
import TreatmentPage from '../pages/TreatmentPage';
import AppointmentPage from '../pages/AppointmentPage';
import PaymentDetailPage from '../pages/PaymentDetailPage';
import ReceiptPage from '../pages/ReceiptPage';

function Router() {
  const { patient, staff } = useAuth();

  return (
    <Routes>
      {patient ? (
        <Route path="/patient" element={<AuthLayout />}>
          <Route path="/patient" element={<AppointmentPage />} />
          <Route path="/patient/profile" element={<ProfilePage />} />
          <Route path="/patient/treatments" element={<TreatmentPage />} />
          <Route path="/patient/receipts" element={<ReceiptPage />} />
          <Route path="*" element={<Navigate to="/patient" />} />
        </Route>
      ) : (
        <>
          <Route path="/patient" element={<PatientLoginPage />} />
          <Route path="/patient/*" element={<Navigate to="/patient" />} />
        </>
      )}
      {staff ? (
        <Route path="/staff" element={<AuthLayout />}>
          <Route path="/staff" element={<AppointmentPage />} />
          <Route path="/staff/profile" element={<ProfilePage />} />
          <Route path="/staff/patients" element={<PatientPage />} />
          <Route path="/staff/patients/:id" element={<ProfilePage />} />
          <Route path="/staff/cases" element={<CasePage />} />
          <Route path="/staff/cases/:id" element={<CaseDetailPage />} />
          <Route path="/staff/payments" element={<PaymentPage />} />
          <Route
            path="/staff/payments/cases/:id"
            element={<PaymentDetailPage />}
          />
          <Route path="/staff/receipts" element={<ReceiptPage />} />
          <Route path="*" element={<Navigate to="/staff" />} />
        </Route>
      ) : (
        <>
          <Route path="/staff" element={<StaffLoginPage />} />
          <Route path="/staff/*" element={<Navigate to="/staff" />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/patient" />} />
    </Routes>
  );
}

export default Router;
