import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import StaffLoginPage from '../pages/StaffLoginPage';
import PatientLoginPage from '../pages/PatientLoginPage';
import { useAuth } from '../contexts/AuthContext';
import PaymentPage from '../pages/PaymentPage';
import AuthLayout from '../layouts/auth/AuthLayout';
import ProfilePage from '../pages/ProfilePage';
import PatientPage from '../pages/PatientPage';
import PatientDetailPage from '../pages/PatientDetailPage';
import CasePage from '../pages/CasePage';
import CaseDetailPage from '../pages/CaseDetailPage';
import TreatmentPage from '../pages/TreatmentPage';
import TreatmentDetailPage from '../pages/TreatmentDetailPage';
import AppointmentPatientPage from '../pages/AppointmentPatientPage';
import AppointmentStaffPage from '../pages/AppointmentStaffPage';
import PaymentDetailPage from '../pages/PaymentDetailPage';
import ReceiptStaffPage from '../pages/ReceiptStaffPage';
import ReceiptPatientPage from '../pages/ReceiptPatientPage';

function Router() {
  const { patient, staff } = useAuth();
  return (
    <Routes>
      {patient ? (
        <Route path="/patient" element={<AuthLayout />}>
          <Route path="/patient" element={<AppointmentPatientPage />} />
          <Route path="/patient/profile" element={<ProfilePage />} />
          <Route path="/patient/treatments" element={<TreatmentPage />} />
          <Route
            path="/patient/treatments/:id"
            element={<TreatmentDetailPage />}
          />
          <Route path="/patient/receipts" element={<ReceiptPatientPage />} />
          <Route path="*" element={<Navigate to="/patient/home" />} />
        </Route>
      ) : (
        <>
          <Route path="/patient" element={<PatientLoginPage />} />
          <Route path="*" element={<Navigate to="/patient" />} />
        </>
      )}
      {staff ? (
        <Route path="/staff" element={<AuthLayout />}>
          <Route path="/staff" element={<AppointmentStaffPage />} />
          <Route path="/staff/profile" element={<ProfilePage />} />
          <Route path="/staff/patients" element={<PatientPage />} />
          {/* <Route path="/staff/patients/:id" element={<PatientDetailPage />} /> */}
          <Route path="/staff/patients/:id" element={<ProfilePage />} />
          <Route path="/staff/cases" element={<CasePage />} />
          <Route path="/staff/cases/:id" element={<CaseDetailPage />} />
          <Route path="/staff/payments" element={<PaymentPage />} />
          <Route
            path="/staff/payments/cases/:id"
            element={<PaymentDetailPage />}
          />
          <Route path="/staff/receipts" element={<ReceiptStaffPage />} />
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
