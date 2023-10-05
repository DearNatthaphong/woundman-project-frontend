import React from 'react';
import AppointmentContent from './AppointmentContent';
import AppointmentFooter from './AppointmentFooter';

function Appointment({ appointment }) {
  return (
    <li className="list-group-item">
      <div className="card">
        <AppointmentContent appointment={appointment} />
        <AppointmentFooter />
      </div>
    </li>
  );
}

export default Appointment;
