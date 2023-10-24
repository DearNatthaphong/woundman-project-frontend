import React from 'react';
import ProfileEdit from './ProfileEdit';

function ProfileHeader({
  isStaffProfile,
  isSelectedPatientProfile,
  staff,
  updatePatient,
  selectedPatient,
  selectedPatientId
}) {
  return (
    <div className="card-header text-bg-secondary">
      <div className="row">
        <div className="col-auto">ข้อมูลส่วนตัว</div>
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

export default ProfileHeader;
