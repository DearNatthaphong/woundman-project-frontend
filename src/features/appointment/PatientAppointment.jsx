import React from 'react';
import * as dateService from '../../utils/dateFormat';
import CreatedBy from '../../components/ui/CreatedBy';

function PatientAppointment({
  appointment: { reason, appointmentDate, status, createdAt, Staff }
}) {
  return (
    <div className="card max-w-362">
      <div className="card-body py-1 ms-2">
        <div className="row">
          <div className="col-auto px-0">
            <span className="m-0">สาเหตุ :</span>
          </div>
          <div className="col-auto ps-1 pe-0">
            <p className="fw-bold m-0">{reason}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-auto px-0">
            <span className="m-0">วันนัด :</span>
          </div>
          <div className="col-auto ps-1 pe-0">
            <p className="fw-bold m-0">
              {dateService.formattedDate(appointmentDate)}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-auto px-0">
            <span className="m-0">สถานะ :</span>
          </div>
          <div className="col-auto ps-1 pe-0">
            <p className="fw-bold m-0">{status}</p>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item py-1">
          <CreatedBy
            titleName={Staff?.titleName}
            firstName={Staff?.firstName}
            lastName={Staff?.lastName}
            role={Staff?.role}
          />
        </li>
      </ul>
      <div className="card-footer">
        <small className="text-body-secondary">
          {dateService.timeSince(createdAt)}
        </small>
      </div>
    </div>
  );
}

export default PatientAppointment;
