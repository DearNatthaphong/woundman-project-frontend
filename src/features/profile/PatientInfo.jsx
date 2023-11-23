import React from 'react';
import * as dateService from '../../utils/dateFormat';
import ListItem from '../../components/ui/ListItem';
import EditedBy from '../../components/ui/EditedBy';

function PatientInfo({
  patient: {
    idCard,
    titleName,
    firstName,
    lastName,
    dateOfBirth,
    mobile,
    idLine,
    Edited
  }
}) {
  const firstPart = mobile?.slice(0, 3);
  const secondPart = mobile?.slice(3, 6);
  const thirdPart = mobile?.slice(6);
  const formattedMobile = `${firstPart}-${secondPart}-${thirdPart}`;

  const lastEdit = Edited?.length > 0 ? Edited[0] : null;
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
      <li className="list-group-item">
        {lastEdit && (
          <EditedBy
            titleName={lastEdit.Editor.titleName}
            firstName={lastEdit.Editor.firstName}
            lastName={lastEdit.Editor.lastName}
            role={lastEdit.Editor.role}
            updatedAt={lastEdit.updatedAt}
          />
        )}
      </li>
    </>
  );
}

export default PatientInfo;
