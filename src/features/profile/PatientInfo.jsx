import React from 'react';
import * as dateService from '../../utils/dateFormat';
import ListItem from '../../components/ui/ListItem';

function PatientInfo({
  patient: {
    idCard,
    titleName,
    firstName,
    lastName,
    dateOfBirth,
    mobile,
    idLine,
    createdAt
  }
}) {
  const formattedMobile = mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  return (
    <>
      <ul className="list-group list-group-flush">
        <ListItem icon="far fa-id-card" text={idCard} />
        <ListItem
          icon="fas fa-user"
          text={`${titleName} ${firstName} ${lastName}`}
        />
        <ListItem
          icon="far fa-calendar-alt"
          text={dateService.convertToBC(dateOfBirth)}
        />
        <ListItem icon="fas fa-phone" text={formattedMobile} />
        <ListItem icon="far fa-comment" text={idLine ? idLine : `-`} />
      </ul>
      <div className="card-footer text-body-secondary text-center">
        {`ลงทะเบียน : ${dateService.formattedDate(createdAt)}`}
      </div>
    </>
  );
}

export default PatientInfo;
