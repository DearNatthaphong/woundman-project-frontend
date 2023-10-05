import React from 'react';
import AppointmentEdit from './AppointmentEdit';
import AppointmentDelete from './AppointmentDelete';

function AppointmentFooter({
  appointment,
  caseId,
  updateAppointment,
  deleteAppointment
}) {
  return (
    <div className="card-footer">
      <div className="row align-items-center">
        <AppointmentEdit
          appointment={appointment}
          caseId={caseId}
          updateAppointment={updateAppointment}
        />
        <AppointmentDelete
          appointment={appointment}
          caseId={caseId}
          deleteAppointment={deleteAppointment}
        />
      </div>
    </div>
  );
}

export default AppointmentFooter;
