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
    <div className="row align-items-center mb-2">
      <div className="col-auto">
        <h5 className="fw-bold my-auto">ข้อมูลส่วนตัว</h5>
      </div>
      {/* <div className="col-auto ms-auto">
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
      </div> */}
    </div>
  );
}

export default ProfileHeader;
