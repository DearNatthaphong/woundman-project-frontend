import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import * as dateService from '../../utils/dateFormat';

function Case({
  case: {
    id,
    chiefComplain,
    createdAt,
    Patient: { titleName, firstName, lastName, dateOfBirth, profileImage }
  }
}) {
  // const patientInfo = Patient || {};
  return (
    <div className="col">
      <Link
        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        to={`/staff/cases/${id}`}
      >
        <div className="card">
          <div className="row g-0 align-items-center">
            <div className="col-4">
              <div className="row justify-content-center">
                <div className="col-9 text-center">
                  <Avatar src={profileImage} size="70" />
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{`${titleName} ${firstName}`}</h5>
                <h5 className="card-title">{`${lastName}`}</h5>
                <h5 className="card-title">{`อายุ : ${dateService.calculateAge(
                  dateOfBirth
                )}`}</h5>
                <p className="card-title">{`อาการเจ็บป่วย : `}</p>
                <p className="card-title">{chiefComplain}</p>
                <p className="card-text">
                  <small className="text-muted">{`created at : ${dateService.timeSince(
                    createdAt
                  )}`}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Case;
