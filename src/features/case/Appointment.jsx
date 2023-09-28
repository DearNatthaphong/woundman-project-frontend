import React from 'react';
import AppointmentContent from './AppointmentContent';
import AppointmentFooter from './AppointmentFooter';

function Appointment() {
  return (
    <div className="card mb-3">
      <AppointmentContent />
      <AppointmentFooter />
    </div>
  );
}

export default Appointment;
