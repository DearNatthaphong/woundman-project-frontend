import React from 'react';
import Avatar from '../../components/ui/Avatar';
import PatientInfo from './PatientInfo';
import StaffInfo from './StaffInfo';

function ProfileContent({
  selectedPatient,
  patient,
  staff,
  isSelectedPatientProfile,
  isStaffProfile
}) {
  return (
    <div className="card-body row justify-content-center">
      <div className="col-auto mb-3">
        <Avatar
          src={
            isSelectedPatientProfile
              ? selectedPatient.profileImage
              : isStaffProfile
              ? staff.profileImage
              : patient.profileImage
          }
          size={150}
        />
      </div>
      {isSelectedPatientProfile ? (
        <PatientInfo patient={selectedPatient} />
      ) : isStaffProfile ? (
        <StaffInfo staff={staff} />
      ) : (
        <PatientInfo patient={patient} />
      )}
    </div>
  );
}

export default ProfileContent;
