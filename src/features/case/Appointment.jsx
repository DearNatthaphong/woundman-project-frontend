import React from 'react';
import AppointmentContent from './AppointmentContent';
import AppointmentFooter from './AppointmentFooter';

function Appointment({ appointment, caseId, updateAppointment }) {
  return (
    <li className="list-group-item">
      <div className="card">
        <AppointmentContent appointment={appointment} />
        <AppointmentFooter
          appointment={appointment}
          caseId={caseId}
          updateAppointment={updateAppointment}
        />
      </div>
    </li>
  );
}

export default Appointment;
