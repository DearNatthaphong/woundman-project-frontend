import React, { useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileFooter from './ProfileFooter';
import { useAuth } from '../../contexts/AuthContext';
import ProfileContent from './ProfileContent';
import { useLocation, useParams } from 'react-router-dom';
import * as patientService from '../../api/newPatientApi';
import { useLoading } from '../../contexts/LoadingContext';
import CaseContainer from '../profileCase/CaseContainer';

function ProfileContainer() {
  const { id: selectedPatientId } = useParams();
  const [selectedPatient, setSelectedPatient] = useState({});
  const [cases, setCases] = useState([]);
  const { staff, patient } = useAuth();
  const location = useLocation();

  const { startLoading, stopLoading } = useLoading();

  const isStaffProfile = location.pathname === '/staff/profile';
  const isSelectedPatientProfile =
    location.pathname === `/staff/patients/${selectedPatientId}`;

  // useEffect(() => {
  //   fetchPatientById(selectedPatientId);
  // }, [selectedPatientId]);

  // const fetchPatientById = async (selectedPatientId) => {
  //   try {
  //     if (selectedPatientId) {
  //       startLoading();
  //       const res = await patientService.getPatientById(selectedPatientId);
  //       console.log('res.data', res.data);
  //       if (isSelectedPatientProfile) {
  //         setSelectedPatient(res.data.patient);
  //       }
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     stopLoading();
  //   }
  // };

  useEffect(() => {
    const fetchPatientById = async (selectedPatientId) => {
      try {
        if (selectedPatientId) {
          // startLoading();
          const res = await patientService.getPatientById(selectedPatientId);
          // console.log('res.data', res.data);
          if (isSelectedPatientProfile) {
            setSelectedPatient(res.data.patient);
          }
        }
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    const fetchCases = async (patientId) => {
      try {
        // startLoading();
        const res = await patientService.getCasesByPatientId(patientId);
        // console.log('res.data.cases', res.data.cases);
        setCases(res.data.cases);
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
    try {
      startLoading();
      const res = await patientService.updatePatient(patientId, input);
      setSelectedPatient(res.data.patient);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const createCase = async (selectedPatientId, input) => {
    try {
      startLoading();
      const res = await patientService.createCaseByPatientId(
        selectedPatientId,
        input
      );
      // console.log('res.data.newCase', res.data.newCase);
      setCases((prevCases) => [res.data.newCase, ...prevCases]);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const updateCase = async (selectedPatientId, caseId, updatedData) => {
    try {
      startLoading();
      const res = await patientService.updateCaseByPatientId(
        selectedPatientId,
        caseId,
        updatedData
      );
      // console.log('res.data.updatedCase', res.data.updatedCase);
      setCases((prevCases) =>
        prevCases.map((prevCase) =>
          prevCase.id === res.data.updatedCase.id
            ? res.data.updatedCase
            : prevCase
        )
      );
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const fetchCases = async (patientId) => {
    try {
      // startLoading();
      const res = await patientService.getCasesByPatientId(patientId);
      // console.log('res.data.cases', res.data.cases);
      setCases(res.data.cases);
    } catch (err) {
      console.log(err);
    } finally {
      // stopLoading();
    }
  };

  const deleteCase = async (selectedPatientId, caseId) => {
    try {
      startLoading();
      await patientService.deleteCaseByPatientId(selectedPatientId, caseId);
      // setCases((prevCases) =>
      //   prevCases.filter((caseItem) => caseItem.id !== caseId)
      // );
      fetchCases(selectedPatientId);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
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
            createCase={createCase}
            selectedPatientId={selectedPatientId}
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
