import React from 'react';
import * as dateService from '../../utils/dateFormat';

function AppointmentContent({ appointment }) {
  const { reason, appointmentDate, status, createdAt } = appointment;
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        {/* <div className="d-flex align-items-center"> */}
        <p className="fw-bold mb-0">
          สาเหตุที่นัด :<small className="ms-2 fw-normal">{reason}</small>
        </p>
        {/* </div> */}
      </li>
      <li className="list-group-item">
        <p className="fw-bold mb-0">
          วันที่นัด :
          <small className="ms-2 fw-normal">
            {dateService.formattedDate(appointmentDate)}
          </small>
        </p>
      </li>
      <li className="list-group-item">
        <p className="fw-bold mb-0">
          สถานะ : <small className="ms-2 fw-normal">{status}</small>
        </p>
      </li>
      <li className="list-group-item">
        <small className="text-body-secondary">
          {dateService.timeSince(createdAt)}
        </small>
      </li>
    </ul>
  );
}

export default AppointmentContent;
