import React, { useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileFooter from './ProfileFooter';
import { useAuth } from '../../contexts/AuthContext';
import ProfileContent from './ProfileContent';
import { useLocation, useParams } from 'react-router-dom';
import * as patientService from '../../api/newPatientApi';
// import { useLoading } from '../../contexts/LoadingContext';
import CaseContainer from '../profileCase/CaseContainer';

function ProfileContainer() {
  const { id: selectedPatientId } = useParams();
  const [selectedPatient, setSelectedPatient] = useState({});
  const [cases, setCases] = useState([]);
  const { staff, patient } = useAuth();

  const location = useLocation();

  // const { startLoading, stopLoading } = useLoading();

  const isStaffProfile = location.pathname === '/staff/profile';
  const isSelectedPatientProfile =
    location.pathname === `/staff/patients/${selectedPatientId}`;

  useEffect(() => {
    const fetchPatientById = async (patientId) => {
      try {
        if (isSelectedPatientProfile) {
          // startLoading();
          const res = await patientService.getPatientById(patientId);
          // console.log('res.data', res.data);
          setSelectedPatient(res.data.patient);
        }
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };
    const fetchCases = async (patientId) => {
      try {
        if (isSelectedPatientProfile) {
          // startLoading();
          const res = await patientService.getCasesByPatientId(patientId);
          // console.log('res.data.cases', res.data.cases);
          setCases(res.data.cases);
        }
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchPatientById(selectedPatientId);
    fetchCases(selectedPatientId);
  }, [selectedPatientId, isSelectedPatientProfile]);

  const updatePatient = async (patientId, input) => {
    const res = await patientService.updatePatient(patientId, input);
    setSelectedPatient(res.data.patient);
  };

  const createCase = async (selectedPatientId, input) => {
    const res = await patientService.createCaseByPatientId(
      selectedPatientId,
      input
    );
    setCases([res.data.newCase, ...cases]);
  };

  const updateCase = async (patientId, caseId, updatedData) => {
    const res = await patientService.updateCaseByPatientId(
      patientId,
      caseId,
      updatedData
    );
    const newCases = cases.map((item) =>
      item.id === res.data.updatedCase.id ? res.data.updatedCase : item
    );
    setCases(newCases);
  };

  const deleteCase = async (patientId, caseId) => {
    await patientService.deleteCaseByPatientId(patientId, caseId);
    setTimeout(() => {
      const newCases = cases.filter((item) => item.id !== caseId);
      setCases(newCases);
    }, 100);
  };

  return (
    <div className="row justify-content-center m-1">
      <div className="col-12 col-sm-5">
        <div className="card mb-3 mx-auto">
          <div className="card-body">
            <ProfileHeader
              isSelectedPatientProfile={isSelectedPatientProfile}
              isStaffProfile={isStaffProfile}
              staff={staff}
              selectedPatient={selectedPatient}
              updatePatient={updatePatient}
              selectedPatientId={selectedPatientId}
            />
            <div className="card mb-3 mx-auto">
              <ProfileContent
                selectedPatient={selectedPatient}
                patient={patient}
                staff={staff}
                isSelectedPatientProfile={isSelectedPatientProfile}
                isStaffProfile={isStaffProfile}
              />
              <ProfileFooter />
            </div>
          </div>
        </div>
      </div>
      {isSelectedPatientProfile && (
        <div className="col-12 col-sm-7">
          <CaseContainer
            cases={cases}
            selectedPatientId={selectedPatientId}
            createCase={createCase}
            updateCase={updateCase}
            deleteCase={deleteCase}
          />
        </div>
      )}
    </div>
    // </div>
  );
}

export default ProfileContainer;
