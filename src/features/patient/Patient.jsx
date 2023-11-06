import React from 'react';
import { Link } from 'react-router-dom';
import * as dateService from '../../utils/dateFormat';
import Avatar from '../../components/ui/Avatar';

function Patient({
  patient: {
    profileImage,
    createdAt,
    titleName,
    firstName,
    lastName,
    dateOfBirth,
    id
  }
}) {
  return (
    <div className="col">
      <div className="card max-w-362">
        <div className="row g-0 align-items-center">
          <div className="col-4 d-flex flex-column justify-content-around align-items-center">
            <div>
              <Avatar src={profileImage} size="80" />
            </div>
          </div>
          <div className="col-8">
            <div className="card-body px-0">
              <h5 className="card-title">{`${titleName} ${firstName} ${lastName}`}</h5>
              <p className="card-text mb-2">
                {`อายุ : ${dateService.calculateAge(dateOfBirth)}`}
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row align-items-center">
            <div className="col-auto ps-1 pe-0">
              <small className="text-body-secondary">
                {`ลงทะเบียน ${dateService.shortFormattedDate(createdAt)}`}
              </small>
            </div>
            <div className="col-auto pe-1 ms-auto">
              <Link
                to={`/staff/patients/${id}`}
                className="btn btn-outline-primary btn-sm "
              >
                ข้อมูลส่วนตัว
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
