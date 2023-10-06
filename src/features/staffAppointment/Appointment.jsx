import React from 'react';
import AppointmentEdit from './AppointmentEdit';
import * as dateService from '../../utils/dateFormat';

function Appointment({
  appointment: {
    reason,
    appointmentDate,
    status,
    createdAt,
    Case: {
      Patient: { titleName, firstName, lastName }
    }
  }
}) {
  return (
    <div className="col-12 col-md-6">
      <div className="card" width="18rem">
        <h5 className="card-header">{`${titleName} ${firstName} ${lastName}`}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h5>
              สาเหตุที่นัด : <span>{reason}</span>
            </h5>
          </li>
          <li className="list-group-item">
            <h5>
              วันที่นัด :{' '}
              <span>{dateService.formattedDate(appointmentDate)}</span>
            </h5>
          </li>
          <li className="list-group-item">
            <h5>
              สถานะ : <span>{status}</span>
            </h5>
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
              <AppointmentEdit />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Appointment;