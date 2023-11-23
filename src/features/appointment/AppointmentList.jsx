import React from 'react';
import Appointment from './Appointment';

function AppointmentList({ appointments, updateAppointment }) {
  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-12">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
          {appointments.map((item) => (
            <Appointment
              key={item.id}
              appointment={item}
              updateAppointment={updateAppointment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppointmentList;
