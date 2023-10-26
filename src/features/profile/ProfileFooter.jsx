import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import * as dateService from '../../utils/dateFormat';

function ProfileFooter() {
  const { patient, staff } = useAuth();

  return (
    <div className="card-footer ">
      <small className="text-body-secondary">
        {`ลงทะเบียน ${dateService.shortFormattedDate(
          patient ? patient.createdAt : staff.createdAt
        )}`}
      </small>
    </div>
  );
}

export default ProfileFooter;
