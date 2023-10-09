import React from 'react';
import Avatar from '../../components/ui/Avatar';
import { Link } from 'react-router-dom';
import * as dateService from '../../utils/dateFormat';
// import PaymentCreate from './PaymentCreate';
// import Modal from '../../components/ui/Modal';

function CaseNoReceipt({
  caseData: {
    id,
    Patient: {
      profileImage,
      titleName,
      firstName,
      lastName,
      dateOfBirth,
      chiefComplain,
      createdAt
    }
  }
}) {
  return (
    <div className="col">
      <Link
        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        to={`/staff/payments/case-no-receipt/${id}`}
      >
        <div className="card">
          <div className="row g-0 ">
            <div className="col-4 d-flex flex-column justify-content-around align-items-center">
              <div>
                <Avatar src={profileImage} size="70" />
                {/* <Avatar src="https://picsum.photos/200/300" size="70" /> */}
              </div>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{`${titleName} ${firstName}`}</h5>
                {/* <h5 className="card-title">ชื่อ </h5> */}
                <h5 className="card-title">{`${lastName}`}</h5>
                {/* <h5 className="card-title">นามสกุล</h5> */}
                <h5 className="card-title">{`อายุ : ${dateService.calculateAge(
                  dateOfBirth
                )}`}</h5>
                {/* <h5 className="card-title">อายุ : </h5> */}
                <p className="card-title">{`อาการเจ็บป่วย : `}</p>
                {/* <p className="card-title">อาการเจ็บป่วย :</p> */}
                <p className="card-title">{chiefComplain}</p>
                {/* <p className="card-title">chiefComplain</p> */}
                <p className="card-text">
                  <small className="text-muted">{`created at : ${dateService.timeSince(
                    createdAt
                  )}`}</small>
                  {/* <small className="text-muted">2 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CaseNoReceipt;
