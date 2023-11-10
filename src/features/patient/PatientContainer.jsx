import React, { useEffect, useState } from 'react';
import PatientSearch from './PatientSearch';
import PatientList from './PatientList';
import { useLoading } from '../../contexts/LoadingContext';
import * as patientService from '../../api/newPatientApi';

function PatientContainer() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // startLoading();
        const res = await patientService.getPatients();
        setPatients(res.data.patients);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchPatients();
  }, []);

  const handleSearch = async () => {
    try {
      startLoading();
      const res = await patientService.getPatientsBySearchTerm(searchTerm);
      // console.log('res.data', res.data);

      if (res.data.patients.length) {
        setPatients(res.data.patients);
      } else {
        setPatients([]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="container-fluid mt-2">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <PatientSearch
            searchTerm={searchTerm}
            handleSearchTerm={(newSearchTerm) => setSearchTerm(newSearchTerm)}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      {patients.length ? (
        <div className="row mt-2 row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
          <PatientList patients={patients} />
        </div>
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
    </div>
  );
}

export default PatientContainer;
