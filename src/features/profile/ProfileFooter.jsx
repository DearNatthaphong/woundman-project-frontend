import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import * as dateService from '../../utils/dateFormat';
import ProfileEdit from './ProfileEdit';

function ProfileFooter({
  isStaffProfile,
  isSelectedPatientProfile,
  staff,
  patient,
  updatePatient,
  selectedPatient,
  selectedPatientId
}) {
  // const { patient, staff } = useAuth();

  return (
    <div className="card-footer ">
      <div className="row align-items-center">
        <div className="col-auto">
          <small className="text-body-secondary">
            {`ลงทะเบียน ${dateService.shortFormattedDate(
              patient ? patient.createdAt : staff.createdAt
            )}`}
          </small>
        </div>
        <div className="col-auto ms-auto">
          {staff && (
            <ProfileEdit
              isStaffProfile={isStaffProfile}
              isSelectedPatientProfile={isSelectedPatientProfile}
              staff={staff}
              updatePatient={updatePatient}
              selectedPatient={selectedPatient}
              selectedPatientId={selectedPatientId}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileFooter;
