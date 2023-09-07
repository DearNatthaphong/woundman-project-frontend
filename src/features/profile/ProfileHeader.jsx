import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

function ProfileHeader() {
  const { patient } = useAuth();
  return (
    <div className="card-header text-center">
      <h1>{patient ? 'ข้อมูลส่วนตัวคนไข้' : 'ข้อมูลส่วนตัวพนักงาน'}</h1>
    </div>
  );
}

export default ProfileHeader;