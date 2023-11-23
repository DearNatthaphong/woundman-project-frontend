import React from 'react';
import PatientAppointment from './PatientAppointment';

function PatientAppointmentList({ appointments }) {
  return (
    <div className="container-fluid">
      <div className="row g-3">
        {appointments.map((item) => (
          <PatientAppointment key={item.id} appointment={item} />
        ))}
      </div>
    </div>
  );
}

export default PatientAppointmentList;
