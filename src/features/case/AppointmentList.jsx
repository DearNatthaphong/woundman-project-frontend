import React from 'react';
import Appointment from './Appointment';

function AppointmentList({
  appointments,
  caseId,
  updateAppointment,
  deleteAppointment
}) {
  return (
    <>
      {appointments.map((item) => (
        <Appointment
          key={item.id}
          appointment={item}
          caseId={caseId}
          updateAppointment={updateAppointment}
          deleteAppointment={deleteAppointment}
        />
      ))}
    </>
  );
}

export default AppointmentList;
