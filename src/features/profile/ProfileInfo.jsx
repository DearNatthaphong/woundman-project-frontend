import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import StaffInfo from './StaffInfo';

function ProfileInfo() {
  const { patient, staff } = useAuth();
  return (
    <>
      {patient && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="far fa-id-card" />
                <h5 className="ps-3 d-inline-block">เลขบัตรประชาชน</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="fas fa-user" />
                <h5 className="ps-3 d-inline-block">น.ส.กกกก กกกกก</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="far fa-calendar-alt" />
                <h5 className="ps-3 d-inline-block">2 มิ.ย. 2532</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="fas fa-phone" />
                <h5 className="ps-3 d-inline-block">0811111111</h5>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <i className="far fa-comment" />
                <h5 className="ps-3 d-inline-block">a@Line</h5>
              </div>
            </div>
          </li>
        </ul>
      )}
      {staff && <StaffInfo />}
    </>
  );
}

export default ProfileInfo;
