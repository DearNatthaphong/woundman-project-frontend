import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import StaffEdit from './StaffEdit';

function ProfileHeader() {
  const { staff } = useAuth();
  return (
    <div className="card-header text-bg-secondary">
      <div className="row">
        <div className="col-auto">ข้อมูลส่วนตัว</div>
        <div className="col-auto ms-auto">{staff && <StaffEdit />}</div>
      </div>
    </div>
  );
}

export default ProfileHeader;
