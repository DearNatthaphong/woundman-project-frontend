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
  const firstPart = mobile?.slice(0, 3);
  const secondPart = mobile?.slice(3, 6);
  const thirdPart = mobile?.slice(6);
  const formattedMobile = `${firstPart}-${secondPart}-${thirdPart}`;
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
