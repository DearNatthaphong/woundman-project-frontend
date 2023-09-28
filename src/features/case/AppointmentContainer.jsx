import React from 'react';
import AppointmentContainerHeader from './AppointmentContainerHeader';
import AppointmentCreate from './AppointmentCreate';
import Appointment from './Appointment';

function AppointmentContainer() {
  return (
    <div>
      <AppointmentContainerHeader />
      <ul className="list-group">
        <li className="list-group-item">
          <AppointmentCreate />
        </li>
        <li className="list-group-item">
          <Appointment />
        </li>
      </ul>
    </div>
  );
}

export default AppointmentContainer;
