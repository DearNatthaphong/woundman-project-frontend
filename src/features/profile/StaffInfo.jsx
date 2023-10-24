import React from 'react';
// import ProfileInfoEdit from './ProfileInfoEdit';
import ListItem from '../../components/ui/ListItem';
// import * as dateService from '../../utils/dateFormat';

function StaffInfo({
  staff: { titleName, firstName, lastName, role, mobile, email }
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
            <ListItem icon="fas fa-suitcase" text={role} />
            <ListItem
              icon="fas fa-phone"
              text={`${mobile ? formattedMobile : '-'}`}
            />
            <ListItem icon="far fa-envelope-open" text={email} />
            {/* <li className="list-group-item text-center">
          <ProfileInfoEdit />
        </li> */}
          </ul>
        </div>
      </div>

      {/* <div className="card-footer text-body-secondary text-center">
        {`ลงทะเบียน : ${dateService.formattedDate(createdAt)}`}
      </div> */}
    </>
  );
}

export default StaffInfo;
