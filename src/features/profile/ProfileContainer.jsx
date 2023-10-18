// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
// import ProfileInfo from './ProfileInfo';
import ProfileFooter from './ProfileFooter';
// import { useAuth } from '../../contexts/AuthContext';
// import ProfileImage from './ProfileImage';
import ProfileContent from './ProfileContent';
// import { useLocation } from 'react-router-dom';

function ProfileContainer() {
  // const { id } = useParams();
  // const [selectedPatient, setSelectedPatient] = useState();
  // const { staff, patient } = useAuth();
  // const location = useLocation();

  // useEffect(()=>{
  //   const fetchPatientById = async (id) => {
  //     // Your fetch logic to get the patient data by id goes here
  //   };
  //   fetchPatientById(id);
  // },[id])

  // const handleEdit = (updatedData) => {
  //   // Logic to handle the update of patient data goes here

  // };

  // const isStaffProfile = location.pathname === "/profile";

  return (
    <div className="row justify-content-center">
      <div className="col col-md-6">
        <div className="card border border-3 mb-3">
          <ProfileHeader />
          <ProfileContent />
          <ProfileFooter />
          {/* <ProfileHeader onEdit={handleEdit}/>
          <ProfileContent id={id} patientData={patientData} patient={patient} staff={staff} isStaffProfile={isStaffProfile} />
          <ProfileFooter /> */}
          {/* <ProfileImage />
          <ProfileInfo /> */}
          {/* {staff && <ProfileFooter isMe={!id} />} */}
          {/* <ProfileFooter isMe={!id} /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
