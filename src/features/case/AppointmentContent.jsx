import React from 'react';
import * as dateService from '../../utils/dateFormat';

function AppointmentContent({
  appointment: { reason, appointmentDate, status }
}) {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <h5>
          สาเหตุที่นัด : <span>{reason}</span>
        </h5>
      </li>
      <li className="list-group-item">
        <h5>
          วันที่นัด : <span>{dateService.formattedDate(appointmentDate)}</span>
        </h5>
      </li>
      <li className="list-group-item">
        <h5>
          สถานะ : <span>{status}</span>
        </h5>
      </li>
    </ul>
  );
}

export default AppointmentContent;
