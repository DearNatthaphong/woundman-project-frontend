import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ProfileEdit from './ProfileEdit';
import CaseEdit from './CaseEdit';

function ProfileFooter({ isMe }) {
  const { patient, staff } = useAuth();

  return (
    <div className="card-footer">
      {staff && isMe && <ProfileEdit />}
      {/* {patient && staff && ( */}

      <>
        <ProfileEdit />
        <CaseEdit />
      </>
      {/* )} */}
    </div>
  );
}

export default ProfileFooter;
