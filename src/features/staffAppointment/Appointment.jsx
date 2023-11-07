import React from 'react';
import AppointmentEdit from './AppointmentEdit';
import * as dateService from '../../utils/dateFormat';

function Appointment({
  appointment: {
    reason,
    appointmentDate,
    status,
    createdAt,
    id,
    Case: {
      Patient: { titleName, firstName, lastName }
    }
  },
  updateAppointment
}) {
  return (
    <div className="col-12 col-md-6">
      {/* <div className="card" width="18rem"> */}
      <div className="card max-w-362">
        <h5 className="card-header">{`${titleName} ${firstName} ${lastName}`}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="d-flex">
              <p className="fw-bold m-0">สาเหตุ :</p>
              <span className="ms-3 mb-0">{reason}</span>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex">
              <p className="fw-bold m-0">วันนัด :</p>
              <span className="ms-3 mb-0">
                {dateService.formattedDate(appointmentDate)}
              </span>
            </div>
            {/* <p>
              วันนัด : <span>{dateService.formattedDate(appointmentDate)}</span>
            </p> */}
          </li>
          <li className="list-group-item">
            <div className="d-flex">
              <p className="fw-bold m-0">สถานะ :</p>
              <span className="ms-3 mb-0">{status}</span>
            </div>
            {/* <p>
              สถานะ : <span>{status}</span>
            </p> */}
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-auto">
                <p className="card-text">
                  <small className="text-body-secondary">
                    {dateService.timeSince(createdAt)}
                  </small>
                </p>
              </div>
              <AppointmentEdit
                id={id}
                reason={reason}
                appointmentDate={appointmentDate}
                status={status}
                updateAppointment={updateAppointment}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Appointment;
