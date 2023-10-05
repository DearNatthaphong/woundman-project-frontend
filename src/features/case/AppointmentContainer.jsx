import React, { useEffect, useState } from 'react';
import * as caseService from '../../api/caseApi';
import AppointmentContainerHeader from './AppointmentContainerHeader';
import AppointmentCreate from './AppointmentCreate';
import Appointment from './Appointment';

function AppointmentContainer({ caseId }) {
  const [appointment, setAppointment] = useState(null);
  // const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        // startLoading();
        const res = await caseService.getAppointmentByCaseId(caseId);
        setAppointment(res.data.appointment);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchAppointment();
  }, [caseId]);

  const createAppointment = async (caseId, input) => {
    const res = await caseService.createAppointmentByCaseId(caseId, input);
    setAppointment(res.data.appointment);
  };

  const updateAppointment = async (caseId, appointmentId, input) => {
    const res = await caseService.updateAppointmentByCaseId(
      caseId,
      appointmentId,
      input
    );
    setAppointment(res.data.updatedAppointment);
  };

  return (
    <div>
      <AppointmentContainerHeader />
      <ul className="list-group">
        {appointment !== null ? (
          <Appointment
            appointment={appointment}
            caseId={caseId}
            updateAppointment={updateAppointment}
          />
        ) : (
          <AppointmentCreate
            caseId={caseId}
            createAppointment={createAppointment}
          />
        )}
      </ul>
    </div>
  );
}

export default AppointmentContainer;
