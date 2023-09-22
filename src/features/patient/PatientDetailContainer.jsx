import React, { useEffect, useState } from 'react';
import PatientDetailHeader from './PatientDetailHeader';
import PatientDetailImage from './PatientDetailImage';
import PatientDetailInfo from './PatientDetailInfo';
import { useParams } from 'react-router-dom';
// import { useLoading } from '../../contexts/LoadingContext';
import * as patientService from '../../api/newPatientApi';
import PatientDetailCaseEdit from './PatientDetailCaseEdit';

function PatientDetailContainer() {
  const { id } = useParams();
  const [patient, setPatient] = useState({});
  // const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchPatientById = async (id) => {
      try {
        // startLoading();
        const res = await patientService.getPatientById(id);
        setPatient(res?.data.patient);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchPatientById(id);
  }, [id]);

  return (
    <div className="row justify-content-center m-1">
      <div className="col col-md-6">
        <div className="card border border-3 mb-3">
          <PatientDetailHeader />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <PatientDetailImage
                id={id}
                patient={patient}
                setPatient={setPatient}
              />
            </li>
            <li className="list-group-item">
              <PatientDetailInfo
                id={id}
                patient={patient}
                setPatient={setPatient}
              />
            </li>
          </ul>
          <PatientDetailCaseEdit id={id} />
        </div>
      </div>
    </div>
  );
}

export default PatientDetailContainer;
