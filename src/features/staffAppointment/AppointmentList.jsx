import React from 'react';
import Appointment from './Appointment';

function AppointmentList({ appointments, updateAppointment }) {
  return (
    <div className="col-12">
      <div className="row g-3 my-1">
        {appointments.map((item) => (
          <Appointment
            key={item.id}
            appointment={item}
            updateAppointment={updateAppointment}
          />
        ))}
      </div>
    </div>
  );
}

export default AppointmentList;
