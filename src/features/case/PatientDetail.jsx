import React from 'react';
import Avatar from '../../components/ui/Avatar';
import * as dateService from '../../utils/dateFormat';

function PatientDetail({ caseData }) {
  if (!caseData || !caseData.Patient) {
    return null;
  }

  const { titleName, firstName, lastName, dateOfBirth } = caseData.Patient;

  return (
    <div className="card-body text-center p-0 ">
      <Avatar size="100" />
      <p className="card-title">{`${titleName} ${firstName} ${lastName}`}</p>
      <p className="card-title">{`อายุ : ${dateService.calculateAge(
        dateOfBirth
      )}`}</p>
    </div>
  );
}

export default PatientDetail;
