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
    idLine
  }
}) {
  const formattedMobile = mobile?.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  return (
    <>
      <ListItem
        icon="fas fa-user"
        text={`${titleName} ${firstName} ${lastName}`}
      />
      <ListItem icon="far fa-id-card" text={idCard} />
      <ListItem
        icon="fas fa-birthday-cake"
        text={dateService.convertToBC(dateOfBirth)}
      />
      <ListItem icon="fas fa-phone" text={formattedMobile} />
      <ListItem icon="far fa-comment" text={idLine ? idLine : `-`} />
    </>
  );
}

export default PatientInfo;
