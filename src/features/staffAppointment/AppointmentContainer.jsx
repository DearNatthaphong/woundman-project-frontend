import React, { useEffect, useState } from 'react';
import AppointmentSearch from './AppointmentSearch';
import AppointmentFilter from './AppointmentFilter';
import AppointmentList from './AppointmentList';
import * as appointmentService from '../../api/appointmentApi';

function AppointmentContainer() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [status, setStatus] = useState('');
  // const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // startLoading();
        const res = await appointmentService.getAppointments();
        console.log('res.data : ', res.data);
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
    try {
      if (status === '') {
        const res = await appointmentService.getAppointments();
        setSearchResult(res.data.appointments);
      } else {
        const res = await appointmentService.getAppointmentsByFilter(status);
        setSearchResult(res.data.appointments);
      }
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
      <AppointmentList
        appointments={searchResult.length > 0 ? searchResult : appointments}
      />
    </div>
  );
}

export default AppointmentContainer;
