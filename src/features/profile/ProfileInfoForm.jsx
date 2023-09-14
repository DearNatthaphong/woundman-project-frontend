import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import StaffInfoForm from './StaffInfoForm';
import PatientInfoForm from './PatientInfoForm';

function ProfileInfoForm() {
  const { patient, staff } = useAuth();
  return (
    <div>
      {' '}
      {patient && <PatientInfoForm />}
      {staff && <StaffInfoForm />}
    </div>
  );
}

export default ProfileInfoForm;
