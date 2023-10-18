import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import * as dateService from '../../utils/dateFormat';
// import ProfileEdit from './ProfileEdit';
// import CaseEdit from './CaseEdit';

function ProfileFooter() {
  const { patient, staff } = useAuth();

  return (
    <div className="card-footer text-bg-secondary">
      {`ลงทะเบียน : ${dateService.formattedDate(
        patient ? patient.createdAt : staff.createdAt
      )}`}
      {/* {staff && <ProfileEdit isMe={isMe} />}
      {patient && (
        <>
          <ProfileEdit />
          <CaseEdit />
        </>
      )} */}
    </div>
  );
}

export default ProfileFooter;
