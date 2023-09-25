import React, { useEffect, useState } from 'react';
import PatientDetailHeader from './PatientDetailHeader';
import PatientDetailImage from './PatientDetailImage';
import PatientDetailInfo from './PatientDetailInfo';
import { useParams } from 'react-router-dom';
// import { useLoading } from '../../contexts/LoadingContext';
import * as patientService from '../../api/newPatientApi';
import CaseContainer from './CaseContainer';

function PatientDetailContainer() {
  const { id: patientId, caseId } = useParams();
  const [patient, setPatient] = useState({});
  const [cases, setCases] = useState([]);
  // const [updatedData, setUpdatedData] = useState({});
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

  // const updateCaseByPatientId = async (patientId, caseId, updatedData) => {
  //   try {
  //     await patientService.updateCaseByPatientId(
  //       patientId,
  //       caseId,
  //       updatedData
  //     );
  //     fetchCasesByPatientId(patientId);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    const fetchPatientById = async (patientId) => {
      try {
        // startLoading();
        // console.log('patienId', patientId);
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

  // const handleCaseUpdated = () => {
  //   updateCaseByPatientId(patientId, caseId, updatedData);
  //   setIsOpen(false);
  // };

  return (
    <div className="row justify-content-center m-1">
      <div className="col col-md-6">
        <div className="card text-bg-secondary border border-3 mb-3">
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
          caseId={caseId}
          // updatedData={updatedData}
          // setUpdatedData={setUpdatedData}
          // handleCaseUpdated={handleCaseUpdated}
          patientId={patientId}
          cases={cases}
          onSuccess={handleCaseCreated}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          fetchCases={fetchCasesByPatientId}
        />
      </div>
    </div>
  );
}

export default PatientDetailContainer;
