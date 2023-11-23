import React, { useEffect, useState } from 'react';
import AppointmentSearch from './AppointmentSearch';
import AppointmentFilter from './AppointmentFilter';
import AppointmentList from './AppointmentList';
import * as appointmentService from '../../api/appointmentApi';
import { useLoading } from '../../contexts/LoadingContext';
import Spinner from '../../components/ui/Spinner';
import { useAuth } from '../../contexts/AuthContext';

function AppointmentContainer() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');
  const { startLoading, stopLoading } = useLoading();
  const [initialLoading, setInitialLoading] = useState(true);
  const { staff } = useAuth();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // startLoading();
        if (staff) {
          const res = await appointmentService.getAppointments();
          setAppointments(res.data.appointments);
        }
        // console.log('res.data : ', res.data);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
        setInitialLoading(false);
      }
    };

    fetchAppointments();
  }, [staff]);

  const handleSearch = async () => {
    try {
      startLoading();
      const res = await appointmentService.getAppointmentsBySearchTerm(
        searchTerm
      );
      // console.log('res.data', res.data);

      if (res.data.appointments.length) {
        setAppointments(res.data.appointments);
        // setSearchTerm('');
      } else {
        setAppointments([]);
        // setSearchTerm('');
      }
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const handleFilter = async () => {
    try {
      startLoading();
      const res = await appointmentService.getAppointmentsByFilter(status);
      // console.log('res.data', res.data);
      if (res.data.appointments.length) {
        setAppointments(res.data.appointments);
      } else {
        setAppointments([]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  // const updateAppointment = async (id, updatedData) => {
  //   try {
  //     await appointmentService.updateAppointmentById(id, updatedData);
  //     const fetchAppointments = async () => {
  //       const res = await appointmentService.getAppointments();
  //       setAppointments(res.data.appointments);
  //     };
  //     fetchAppointments();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  if (initialLoading) return <Spinner />;

  return (
    <div className="container-fluid">
      {staff && (
        <>
          <div className="row g-2 mt-1 justify-content-center">
            <div className="col-12 col-sm-6">
              <AppointmentSearch
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                handleSearchTerm={(newSearchTerm) =>
                  setSearchTerm(newSearchTerm)
                }
              />
            </div>
            <div className="col-12 col-sm-6">
              <AppointmentFilter
                handleFilter={handleFilter}
                status={status}
                handleStatus={(newStatus) => setStatus(newStatus)}
              />
            </div>
          </div>
          {appointments.length ? (
            <AppointmentList appointments={appointments} />
          ) : (
            <div className="card mt-3">
              <div className="card-body">
                <p className="m-0">
                  <i className="fa-solid fa-magnifying-glass pe-3" />
                  ไม่พบข้อมูล
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AppointmentContainer;
