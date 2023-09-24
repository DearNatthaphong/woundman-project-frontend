import React, { useEffect, useState } from 'react';
import PatientDetailHeader from './PatientDetailHeader';
import PatientDetailImage from './PatientDetailImage';
import PatientDetailInfo from './PatientDetailInfo';
import { useParams } from 'react-router-dom';
// import { useLoading } from '../../contexts/LoadingContext';
import * as patientService from '../../api/newPatientApi';
import CaseContainer from './CaseContainer';

function PatientDetailContainer() {
  const { id: patientId } = useParams();
  const [patient, setPatient] = useState({});
  const [cases, setCases] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  // const { startLoading, stopLoading } = useLoading();

  const fetchCasesByPatientId = async (patientId) => {
    try {
      const res = await patientService.getCasesByPatientId(patientId);
      setCases(res.data.cases);
    } catch (err) {
      console.log(err);
    } finally {
      // stopLoading();
    }
  };

  useEffect(() => {
    const fetchPatientById = async (patientId) => {
      try {
        // startLoading();
        const res = await patientService.getPatientById(patientId);
        setPatient(res.data.patient);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchPatientById(patientId);
    fetchCasesByPatientId(patientId);
  }, [patientId]);

  const handleCaseCreated = () => {
    fetchCasesByPatientId(patientId);
    setIsOpen(false);
  };

  return (
    <div className="row justify-content-center m-1">
      <div className="col col-md-6">
        <div className="card text-bg-info border border-3 mb-3">
          <PatientDetailHeader />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <PatientDetailImage
                patientId={patientId}
                patient={patient}
                setPatient={setPatient}
              />
            </li>
            <li className="list-group-item">
              <PatientDetailInfo
                patientId={patientId}
                patient={patient}
                setPatient={setPatient}
              />
            </li>
          </ul>
          {/* <PatientDetailCaseEdit id={id} /> */}
        </div>
        <CaseContainer
          patientId={patientId}
          cases={cases}
          onSuccess={handleCaseCreated}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}

export default PatientDetailContainer;
