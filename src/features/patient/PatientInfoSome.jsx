import React from 'react';
import { timeSince, calculateAge } from '../../utils/dateFormat';

function PatientInfoSome({
  patient: { titleName, firstName, lastName, dateOfBirth, createdAt }
}) {
  return (
    <div className="col-8">
      <div className="card-body">
        <h5 className="card-title">
          {titleName}
          {` `}
          {firstName}
          {` `}
          {lastName}
        </h5>
        <h5 className="card-title">{`อายุ : ${calculateAge(dateOfBirth)}`}</h5>
        <p className="card-text">
          <small className="text-muted">{`created at : ${timeSince(
            createdAt
          )}`}</small>
        </p>
      </div>
    </div>
  );
}

export default PatientInfoSome;
