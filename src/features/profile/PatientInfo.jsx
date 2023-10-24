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
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8">
          <ul className="list-group list-group-flush">
            <ListItem
              icon="fas fa-user"
              text={`${titleName} ${firstName} ${lastName}`}
            />
            <ListItem icon="far fa-id-card" text={idCard} />
            <ListItem
              icon="far fa-calendar-alt"
              text={dateService.convertToBC(dateOfBirth)}
            />
            <ListItem icon="fas fa-phone" text={formattedMobile} />
            <ListItem icon="far fa-comment" text={idLine ? idLine : `-`} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default PatientInfo;
