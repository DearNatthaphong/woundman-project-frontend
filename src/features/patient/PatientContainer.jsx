import React, { useEffect, useState } from 'react';
import PatientSearch from './PatientSearch';
import PatientList from './PatientList';
// import { useLoading } from '../../contexts/LoadingContext';
import * as patientService from '../../api/newPatientApi';

function PatientContainer() {
  const [patients, setPatients] = useState([]);
  // const { startLoading, stopLoading } = useLoading();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // startLoading();
        await getPatients();
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
      const res = await patientService.getPatientsBySearchTerm(searchTerm);
      setSearchResults(res.data.patients);
    } catch (err) {
      console.log(err);
    }
  };

  const getPatients = async () => {
    const res = await patientService.getPatients();
    setPatients(res.data.patients);
  };

  return (
    <div>
      <PatientSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <PatientList
        patients={searchResults.length > 0 ? searchResults : patients}
      />
    </div>
  );
}

export default PatientContainer;
