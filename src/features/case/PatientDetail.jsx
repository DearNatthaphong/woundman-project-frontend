import React from 'react';
import Avatar from '../../components/ui/Avatar';
import * as dateService from '../../utils/dateFormat';
import { Link } from 'react-router-dom';

function PatientDetail({ caseData, updateCase }) {
  if (!caseData || !caseData.Patient) {
    return null;
  }

  const { titleName, firstName, lastName, dateOfBirth, profileImage, id } =
    caseData.Patient;

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto pe-0">
        <Link to={`/staff/patients/${id}`}>
          <Avatar src={profileImage} size="50" />
        </Link>
      </div>
      <div className="col">
        <Link
          className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          to={`/staff/patients/${id}`}
        >
          <p className="card-title p-0 m-0">
            <span>{`${titleName} ${firstName} ${lastName}`}</span>
          </p>
        </Link>
        <small className="card-text">
          <span className="text-body-secondary">{`อายุ : ${dateService.calculateAge(
            dateOfBirth
          )}`}</span>
        </small>
      </div>
      {/* <div className="col-auto">
        <button className="btn btn-outline-secondary border border-0 rounded-circle">
        <i className="fa-solid fa-pen" />
        </button>
      </div> */}
    </div>
  );
}

export default PatientDetail;
