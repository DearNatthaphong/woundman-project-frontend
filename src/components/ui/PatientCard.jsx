import React from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import * as dateService from '../../utils/dateFormat';

function PatientCard({
  patient: { profileImage, titleName, firstName, lastName, dateOfBirth, id }
}) {
  return (
    <div className="container">
      <div className="row align-items-center my-2">
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
      </div>
    </div>
  );
}

export default PatientCard;
