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
      {/* <Link
        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        to={`/staff/cases/${id}`}
      > */}
      <div className="card max-w-362">
        <div className="row g-0 align-items-center">
          <div className="col-4">
            <div className="row justify-content-center">
              <div
                className="col-4 text-center d-flex justify-content-center px-3 pt-2"
                style={{ height: '100px' }}
              >
                <Avatar src={profileImage} size="80" />
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card-body px-0">
              <h5 className="card-title">{`${titleName} ${firstName} ${lastName}`}</h5>
              <p className="card-title">{`อายุ ${dateService.calculateAge(
                dateOfBirth
              )}`}</p>
              <p className="card-title">{`อาการเจ็บป่วย : ${chiefComplain}`}</p>
              <div className="text-end px-3">
                <Link
                  to={`/staff/cases/${id}`}
                  className="btn btn-outline-primary btn-sm "
                >
                  ข้อมูลการรักษา
                </Link>
              </div>
              {/* <p className="card-text">
                <small className="text-muted">{`created at : ${dateService.timeSince(
                  createdAt
                )}`}</small> */}
              {/* </p> */}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">
            {`การรักษา ${dateService.shortFormattedDate(createdAt)}`}
          </small>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default Case;
