import React, { useEffect, useState } from 'react';
import * as caseService from '../../api/caseApi';
// import AppointmentCreate from './AppointmentCreate';
import Appointment from './Appointment';
import AppointmentToggleCreate from './AppointmentToggleCreate';
import AppointmentList from './AppointmentList';

function AppointmentContainer({ caseId }) {
  const [appointments, setAppointments] = useState([]);
  // const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        // startLoading();
        const res = await caseService.getAppointmentByCaseId(caseId);
        setAppointments(res.data.appointments);
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
    setTimeout(() => {
      setAppointments([res.data.newAppointment, ...appointments]);
    }, 100);
  };

  const updateAppointment = async (caseId, appointmentId, input) => {
    const res = await caseService.updateAppointmentByCaseId(
      caseId,
      appointmentId,
      input
    );
    const newAppointments = appointments.map((item) =>
      item.id === appointmentId ? res.data.updatedAppointment : item
    );
    setAppointments(newAppointments);
  };

  const deleteAppointment = async (caseId, appointmentId) => {
    await caseService.deleteAppointmentByCaseId(caseId, appointmentId);
    setTimeout(() => {
      const newAppointments = appointments.filter(
        (item) => item.id !== appointmentId
      );
      setAppointments(newAppointments);
    }, 100);
  };

  return (
    <div className="card-body">
      <AppointmentToggleCreate
        appointments={appointments}
        createAppointment={createAppointment}
        caseId={caseId}
      />
      <AppointmentList
        caseId={caseId}
        appointments={appointments}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
      {/* <Appointment
        caseId={caseId}
        appointment={appointment}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      /> */}

      {/* <ul className="list-group"> */}
      {/* {appointment !== null ? ( */}
      {/* <Appointment
          appointment={appointment}
          caseId={caseId}
          updateAppointment={updateAppointment}
          deleteAppointment={deleteAppointment}
        /> */}
      {/* ) : (
          <AppointmentCreate
            caseId={caseId}
            createAppointment={createAppointment}
          />
        )} */}
      {/* </ul> */}
    </div>
  );
}

export default AppointmentContainer;
