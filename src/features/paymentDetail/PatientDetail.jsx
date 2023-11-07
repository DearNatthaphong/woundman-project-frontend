import React from 'react';
import Avatar from '../../components/ui/Avatar';
import * as dateService from '../../utils/dateFormat';
import CaseCard from '../../components/ui/CaseCard';

function PatientDetail({ caseData }) {
  // if (!caseData || !caseData.Patient) {
  //   return null;
  // }

  // const patientData = caseData.Patient;
  // const {
  //   profileImage,
  //   titleName,
  //   firstName,
  //   lastName,
  //   dateOfBirth,
  //   createdAt
  // } = patientData;
  return (
    <li className="list-group-item">
      {/* <p className="card-text">{`${dateService.formattedDate(createdAt)}`}</p> */}
      {/* <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-6">
              <Avatar src={profileImage} size="100" />
            </div>
            <div className="col-6 text-start">
              {' '}
              <p className="card-title">{`${titleName} ${firstName} ${lastName}`}</p>
              <p className="card-title">{`อายุ : ${dateService.calculateAge(
                dateOfBirth
              )}`}</p>
            </div>
          </div>
        </div>
      </div> */}
      <CaseCard caseData={caseData} />
    </li>
  );
}

export default PatientDetail;
