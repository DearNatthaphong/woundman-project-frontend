import React from 'react';
import Avatar from '../../components/ui/Avatar';
import * as dateService from '../../utils/dateFormat';

function PatientDetail({ caseData }) {
  if (!caseData || !caseData.Patient) {
    return null;
  }

  const { titleName, firstName, lastName, dateOfBirth, profileImage } =
    caseData.Patient;

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto pe-0">
        <Avatar src={profileImage} size="50" />
      </div>
      <div className="col">
        <h5 className="card-title p-0 m-0">
          <span>{`${titleName} ${firstName} ${lastName}`}</span>
        </h5>
        <p className="card-text">
          <span className="text-body-secondary">{`อายุ : ${dateService.calculateAge(
            dateOfBirth
          )}`}</span>
        </p>
      </div>
      <div className="col-auto">
        <button className="btn btn-outline-secondary border border-0 rounded-circle">
          <i className="fa-solid fa-pen" />
        </button>
      </div>
    </div>
  );
}

export default PatientDetail;
