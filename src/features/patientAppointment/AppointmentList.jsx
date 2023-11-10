import React from 'react';
import Appointment from './Appointment';

function AppointmentList({ appointments }) {
  return (
    <div className="container-fluid">
      <div className="row g-3">
        {appointments.map((item) => (
          <Appointment key={item.id} appointment={item} />
        ))}
      </div>
    </div>
  );
}

export default AppointmentList;
