import React, { useEffect, useState } from 'react';
import * as caseService from '../../api/caseApi';
// import AppointmentCreate from './AppointmentCreate';
// import Appointment from './Appointment';
import AppointmentToggleCreate from './AppointmentToggleCreate';
import AppointmentList from './AppointmentList';
import Spinner from '../../components/ui/Spinner';

function AppointmentContainer({ caseId }) {
  const [appointments, setAppointments] = useState([]);
  // const { startLoading, stopLoading } = useLoading();
  const [initialLoading, setInitialLoading] = useState(true);

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
        setInitialLoading(false);
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

  if (initialLoading) return <Spinner />;

  return (
    <>
      <div className="card">
        <div className="card-body p-2">
          <AppointmentToggleCreate
            appointments={appointments}
            createAppointment={createAppointment}
            caseId={caseId}
          />
        </div>
      </div>
      <AppointmentList
        caseId={caseId}
        appointments={appointments}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
    </>
  );
}

export default AppointmentContainer;

/* <Appointment
  caseId={caseId}
  appointment={appointment}
  updateAppointment={updateAppointment}
  deleteAppointment={deleteAppointment}
/> */

/* <ul className="list-group"> */
/* {appointment !== null ? ( */
/* <Appointment
    appointment={appointment}
    caseId={caseId}
    updateAppointment={updateAppointment}
    deleteAppointment={deleteAppointment}
  /> */
/* ) : (
    <AppointmentCreate
      caseId={caseId}
      createAppointment={createAppointment}
    />
  )} */
/* </ul> */
