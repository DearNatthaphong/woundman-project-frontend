import React, { useEffect, useState } from 'react';
import AppointmentSearch from './AppointmentSearch';
import AppointmentFilter from './AppointmentFilter';
import AppointmentList from './AppointmentList';
import * as appointmentService from '../../api/appointmentApi';

function AppointmentContainer() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [status, setStatus] = useState('');
  // const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // startLoading();
        const res = await appointmentService.getAppointments();
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

  const handleSearch = async () => {
    try {
      const res = await appointmentService.getAppointmentsBySearchTerm(
        searchTerm
      );
      setSearchResult(res.data.appointments);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFilter = async () => {
    // try {
    //   if (status === '') {
    //     const res = await appointmentService.getAppointments();
    //     setSearchResult(res.data.appointments);
    //   } else {
    //     const res = await appointmentService.getAppointmentsByFilter(status);
    //     setSearchResult(res.data.appointments);
    //   }
    try {
      let res;

      if (status === '') {
        res = await appointmentService.getAppointments();
      } else {
        res = await appointmentService.getAppointmentsByFilter(status);
      }

      const appointmentsData = res.data.appointments;

      setSearchResult(appointmentsData);

      if (appointmentsData.length === 0) {
        setSearchResult([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateAppointment = async (id, updatedData) => {
    try {
      await appointmentService.updateAppointmentById(id, updatedData);
      const fetchAppointments = async () => {
        const res = await appointmentService.getAppointments();
        setAppointments(res.data.appointments);
      };
      fetchAppointments();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row g-3 mx-3 justify-content-center">
      <AppointmentSearch
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <AppointmentFilter
        handleFilter={handleFilter}
        status={status}
        setStatus={setStatus}
      />

      {searchResult === null ? (
        <AppointmentList
          appointments={appointments}
          updateAppointment={updateAppointment}
        />
      ) : searchResult.length === 0 ? (
        <div>No appointments found.</div>
      ) : (
        <AppointmentList
          appointments={searchResult}
          updateAppointment={updateAppointment}
        />
      )}
    </div>
  );
}

export default AppointmentContainer;
