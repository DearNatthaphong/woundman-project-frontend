import React from 'react';
import * as dateService from '../../utils/dateFormat';

function Appointment({
  appointment: { reason, appointmentDate, status, createdAt }
}) {
  return (
    <div className="col-12 col-md-6">
      <div className="card max-w-362">
        <div className="card-body py-1">
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
        <div className="card-footer">
          <small className="text-body-secondary">
            {dateService.timeSince(createdAt)}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
