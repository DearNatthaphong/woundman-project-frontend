import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ProfileInfoEdit from './ProfileInfoEdit';

function StaffInfo() {
  const {
    staff: { titleName, firstName, lastName, role, mobile, email }
  } = useAuth();
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <i className="fas fa-user" />
            <h5 className="ps-3 d-inline-block">
              {`${titleName} ${firstName} ${lastName}`}
            </h5>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <i className="fas fa-suitcase" />
            <h5 className="ps-3 d-inline-block">{role}</h5>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <i className="fas fa-phone" />
            <h5 className="ps-3 d-inline-block">{`${
              mobile ? mobile : '-'
            }`}</h5>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <i className="far fa-envelope-open" />
            <h5 className="ps-3 d-inline-block">{email}</h5>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <ProfileInfoEdit />
          </div>
        </div>
      </li>
    </ul>
  );
}

export default StaffInfo;
