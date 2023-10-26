import React, { useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileFooter from './ProfileFooter';
import { useAuth } from '../../contexts/AuthContext';
import ProfileContent from './ProfileContent';
import { useLocation, useParams } from 'react-router-dom';
import * as patientService from '../../api/newPatientApi';
import { useLoading } from '../../contexts/LoadingContext';
import CaseContainer from '../patient/CaseContainer';

function ProfileContainer() {
  const { id: selectedPatientId } = useParams();
  const [selectedPatient, setSelectedPatient] = useState({});
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

    fetchPatientById(selectedPatientId);
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

  return (
    <div className="row justify-content-center m-1">
      <div
        className={`col-12 ${
          isSelectedPatientProfile ? 'col-sm-5 col-md-4' : ''
        }`}
      >
        <div
          className="card mb-3 mx-auto"
          // style={{ width: '300px' }}
        >
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
      <div
        className={`col-12 ${
          isSelectedPatientProfile ? 'col-sm-7 col-md-8' : ''
        }`}
      >
        {isSelectedPatientProfile && <CaseContainer />}
      </div>
    </div>
  );
}

export default ProfileContainer;
