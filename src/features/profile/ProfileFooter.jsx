import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import * as dateService from '../../utils/dateFormat';

function ProfileFooter() {
  const { patient, staff } = useAuth();

  return (
    <div className="card-footer ">
      <p className="text-muted my-auto">
        {`ลงทะเบียน : ${dateService.shortFormattedDate(
          patient ? patient.createdAt : staff.createdAt
        )}`}
      </p>
    </div>
  );
}

export default ProfileFooter;
