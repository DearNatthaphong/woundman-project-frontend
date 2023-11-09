import React from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import * as dateService from '../../utils/dateFormat';
import PatientCard from './PatientCard';

function CaseCard({ isReceiptPage, isCasePage, isPaymentPage, caseData }) {
  const { id, chiefComplain, createdAt, Patient } = caseData;
  if (!Patient) {
    return null;
  }
  // const { profileImage, titleName, firstName, lastName, dateOfBirth } = Patient;
  return (
    <div className="col">
      <div className="card max-w-362">
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item"> */}
        {/* <div className="row g-0 align-items-center">
          <div className="col-4 d-flex flex-column justify-content-around align-items-center">
            <div>
              <Avatar src={profileImage} size="80" />
            </div>
          </div>
          <div className="col-8">
            <div className="card-body ps-0">
              <h5 className="card-title">{`${titleName} ${firstName} ${lastName}`}</h5>
              <p className="card-title">{`อายุ : ${dateService.calculateAge(
                dateOfBirth
              )}`}</p>
            </div>
          </div>
        </div> */}
        <PatientCard patient={Patient} />
        {/* </li>
          <li className="list-group-item"> */}
        <div className="card mx-3 mb-2 px-2 ">
          <p className="card-title my-auto">{`อาการ : ${chiefComplain}`}</p>
        </div>
        {/* </li> */}
        {/* </ul> */}
        <div className="card-footer">
          <div className="row align-items-center">
            <div className="col-auto ps-1 pe-0">
              <small className="text-body-secondary">
                {`การรักษา ${dateService.shortFormattedDate(createdAt)}`}
              </small>
            </div>
            {isPaymentPage && (
              <div className="col-auto pe-1 ms-auto">
                <Link
                  to={`/staff/payments/cases/${id}`}
                  className="btn btn-outline-primary btn-sm "
                >
                  การทำจ่าย
                </Link>
              </div>
            )}
            {isCasePage && (
              <div className="col-auto pe-1 ms-auto">
                <Link
                  to={`/staff/cases/${id}`}
                  className="btn btn-outline-primary btn-sm "
                >
                  การตรวจรักษา
                </Link>
              </div>
            )}
            {isReceiptPage && (
              <div className="col-auto pe-1 ms-auto">
                <Link
                  to={`/staff/payments/cases/${id}`}
                  className="btn btn-outline-primary btn-sm "
                >
                  ใบเสร็จ
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseCard;
