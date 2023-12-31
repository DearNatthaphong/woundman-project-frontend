import React from 'react';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function DropdownToggle({ onClick }) {
  const { patient, staff } = useAuth();

  return (
    <div
      onClick={onClick}
      // className="dropdown-toggle"
      data-bs-toggle="dropdown"
      data-bs-display="static"
      type="button"
    >
      <Avatar
        src={patient ? patient.profileImage : staff.profileImage}
        size="40"
      />
    </div>
  );
}

export default DropdownToggle;
