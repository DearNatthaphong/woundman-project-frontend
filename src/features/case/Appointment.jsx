import React from 'react';
import AppointmentContent from './AppointmentContent';
// import AppointmentFooter from './AppointmentFooter';
import AppointmentHeader from './AppointmentHeader';

function Appointment({
  appointment,
  caseId,
  updateAppointment,
  deleteAppointment
}) {
  return (
    <div className="card mt-1">
      <AppointmentHeader
        appointment={appointment}
        caseId={caseId}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
      <AppointmentContent appointment={appointment} />
      {/* <AppointmentFooter
          appointment={appointment}
          caseId={caseId}
          updateAppointment={updateAppointment}
          deleteAppointment={deleteAppointment}
        /> */}
    </div>
  );
}

export default Appointment;
