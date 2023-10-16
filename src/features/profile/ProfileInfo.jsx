import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import StaffInfo from './StaffInfo';
import PatientInfo from './PatientInfo';

function ProfileInfo() {
  const { patient, staff } = useAuth();
  return (
    <>
      {patient && <PatientInfo patient={patient} />}
      {staff && <StaffInfo />}
    </>
  );
}

export default ProfileInfo;
