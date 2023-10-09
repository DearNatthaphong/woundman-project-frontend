import React from 'react';
import Avatar from '../../components/ui/Avatar';
import * as dateService from '../../utils/dateFormat';

function PatientDetail({
  caseData: {
    Patient: {
      profileImage,
      titleName,
      firstName,
      lastName,
      dateOfBirth,
      createdAt
    }
  }
}) {
  return (
    <li className="list-group-item text-center py-3">
      <Avatar src={profileImage} size="100" />
      <p className="card-title">{`${titleName} ${firstName} ${lastName}`}</p>
      <p className="card-title">{`อายุ : ${dateService.calculateAge(
        dateOfBirth
      )}`}</p>
      {/* <p className="card-text">วันที่ 12 สค 2566 เวลา 13.30 น.</p> */}
      <p className="card-text">{`${dateService.formattedDate(createdAt)}`}</p>
    </li>
  );
}

export default PatientDetail;
