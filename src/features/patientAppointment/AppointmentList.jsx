import React from 'react';
import Appointment from './Appointment';

function AppointmentList({ appointments }) {
  return (
    <div className="row g-3 mx-3 mb-3">
      {appointments.map((item) => (
        <Appointment key={item.id} appointment={item} />
      ))}
    </div>
  );
}

export default AppointmentList;
