import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import StaffLoginPage from '../pages/StaffLoginPage';
import PatientLoginPage from '../pages/PatientLoginPage';
import { useAuth } from '../contexts/AuthContext';
import TreatmentListPage from '../pages/TreatmentListPage';
import ReceiptListPage from '../pages/ReceiptListPage';
import CaseListPage from '../pages/CaseListPage';
import PaymentPage from '../pages/PaymentPage';
import AuthLayout from '../layouts/auth/AuthLayout';
import AppointmentPage from '../pages/AppointmentPage';
import ProfilePage from '../pages/ProfilePage';
import PatientPage from '../pages/PatientPage';
import PatientDetailPage from '../features/patient/PatientDetailPage';

function Router() {
  const { patient, staff } = useAuth();
  return (
    <Routes>
      {/* patient */}
      {patient ? (
        <Route path="/patient" element={<AuthLayout />}>
          <Route path="/patient" element={<AppointmentPage />} />
          <Route path="/patient/profile" element={<ProfilePage />} />
          <Route path="/patient/treatments" element={<TreatmentListPage />} />
          <Route path="/patient/receipts" element={<ReceiptListPage />} />
          <Route path="*" element={<Navigate to="/patient/home" />} />
        </Route>
      ) : (
        <>
          <Route path="/patient" element={<PatientLoginPage />} />
          <Route path="*" element={<Navigate to="/patient" />} />
        </>
      )}

      {/* staff */}
      {staff ? (
        <Route path="/staff" element={<AuthLayout />}>
          <Route path="/staff" element={<AppointmentPage />} />
          <Route path="/staff/profile" element={<ProfilePage />} />
          <Route path="/staff/patients" element={<PatientPage />} />
          <Route path="/staff/patients/:id" element={<PatientDetailPage />} />
          <Route path="/staff/cases" element={<CaseListPage />} />
          <Route path="/staff/treatments" element={<TreatmentListPage />} />
          <Route path="/staff/payment" element={<PaymentPage />} />
          <Route path="/staff/receipts" element={<ReceiptListPage />} />
          <Route path="*" element={<Navigate to="/staff/home" />} />
        </Route>
      ) : (
        <>
          <Route path="/staff" element={<StaffLoginPage />} />
          <Route path="*" element={<Navigate to="/staff" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
