import React, { useEffect, useState } from 'react';
import AppointmentList from './AppointmentList';
import * as appointmentService from '../../api/appointmentApi';

function AppointmentContainer() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // startLoading();
        const res = await appointmentService.getAppointmentsByPatientId();
        // console.log('res.data : ', res.data);
        setAppointments(res.data.appointments);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchAppointments();
  }, []);
  return <AppointmentList appointments={appointments} />;
}

export default AppointmentContainer;
