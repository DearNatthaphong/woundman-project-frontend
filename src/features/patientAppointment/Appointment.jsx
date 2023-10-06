import React from 'react';
import * as dateService from '../../utils/dateFormat';

function Appointment({
  appointment: { reason, appointmentDate, status, createdAt }
}) {
  return (
    <div className="col-12 col-md-6">
      <div className="card" width="18rem">
        <h5 className="card-header">
          วันที่นัด : <span>{dateService.formattedDate(appointmentDate)}</span>
        </h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h5>
              สาเหตุที่นัด : <span>{reason}</span>
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
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Appointment;
