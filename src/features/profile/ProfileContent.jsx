import React from 'react';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';
import PatientInfo from './PatientInfo';
import StaffInfo from './StaffInfo';

// function ProfileContent({ id, patientData, patient, staff, isStaffProfile, onEdit}) {
function ProfileContent() {
  const { staff, patient } = useAuth();
  return (
    <div className="card-body">
      <div className="text-center mb-3">
        <Avatar
          // src={isStaffProfile ? (staff && staff.profileImage) : (patient && patient.profileImage)}
          src={staff ? staff.profileImage : patient.profileImage}
          size={150}
        />
      </div>
      {patient && <PatientInfo patient={patient} />}
      {/* {id && <PatientInfo id={id} staff={staff} patientData={patientData} />} */}
      {staff && <StaffInfo staff={staff} />}
    </div>
  );
}

export default ProfileContent;
