import React from 'react';
import Appointment from './Appointment';

function AppointmentList({ appointments }) {
  return (
    <div className="col-12">
      <div className="row g-3 my-1">
        {appointments.map((item) => (
          <Appointment key={item.id} appointment={item} />
        ))}
      </div>
    </div>
  );
}

export default AppointmentList;
