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
    <ul className="list-group list-group-flush">
      <li className="list-group-item text-center">
        <div className="d-inline-flex">
          <Avatar
            src={
              isSelectedPatientProfile
                ? selectedPatient.profileImage
                : isStaffProfile
                ? staff.profileImage
                : patient.profileImage
            }
            size={125}
          />
        </div>
      </li>
      {isSelectedPatientProfile ? (
        <PatientInfo patient={selectedPatient} />
      ) : isStaffProfile ? (
        <StaffInfo staff={staff} />
      ) : (
        <PatientInfo patient={patient} />
      )}
    </ul>
  );
}

export default ProfileContent;
